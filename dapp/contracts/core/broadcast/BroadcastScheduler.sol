// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last update v0.0.1) 

pragma solidity ^0.8.15;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/6ab8d6a67e3281ab062bdbe4df32b95c6409ee6d/contracts/utils/Strings.sol";

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";
import "https://github.com/Block-Star-Logic/open-libraries/blob/703b21257790c56a61cd0f3d9de3187a9012e2b3/blockchain_ethereum/solidity/V1/libraries/LOpenUtilities.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "../../interfaces/broadcast/IBroadcastScheduler.sol";

/**
 * @dev implementation of the {IBroadcastScheduler} interface
 */

contract BroadcastScheduler is IBroadcastScheduler, IOpenVersion { 

    using LOpenUtilities for uint256;
    using LOpenUtilities for string; 
    using Strings for uint256; 

    string name = "WEB_3_EDI_BROADCAST_SCHEDULER_STAGE_"; 
    uint256 version = 1; 

    string stage; 
    IOpenRegister register; 

    string MAX_BOOKING_WINDOW  = "MAX_BOOKING_WINDOW";
    string MAX_BOOKING_DURATION  = "MAX_BOOKING_DURATION";

    mapping(string=>uint256) limitsByName; 
    

    struct Booking { 
        string broadcastId; 
        string playbackId; 
        address eventContract; 
        uint256 startTime; 
        uint256 endTime; 
    }

    string [] allBroadcastIds; 
    string [] currentBroadcastIds; 
    string [] cancelledBroadcasts; 
    string [] prunedBroadcasts; 
    uint256 [] startTimes;
    mapping(string=>Booking) bookingByBroadcastId; 
    mapping(uint256=>Booking) bookingsByStartTime;


    constructor(address _registry, string memory _stageName) { 
        name = name.append(_stageName);
        stage = _stageName; 
        register = IOpenRegister(_registry);

        initSchedulerDefaults(); 
    }

    function getName() view external returns (string memory _name) {
        return name; 
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }

    function getStageName() view external returns (string memory _stage){
        return stage; 
    }   

    function requestBroadcast(uint256 _startTime, uint256 _endTime, string memory _playbackId, address _eventContract) external returns (string memory _broadcastId){
       
        uint256 now_ = block.timestamp; 

        require(((_endTime - _startTime) <= limitsByName[MAX_BOOKING_DURATION]), " duration ");
        require(_startTime > now_, "can not start before now ");
        require(_endTime > _startTime, "can not start before ended ");        
        require(_endTime < limitsByName[MAX_BOOKING_WINDOW], " can only book 24 hours into the future ");
        
        uint256 insertIndex_ = 0; 
        
        for(uint256 x = 0; x < startTimes.length; x++) {
            Booking memory b_ = bookingsByStartTime[startTimes[x]];
            require(_startTime != b_.startTime && _startTime != b_.endTime, " event conflict - start time");
            require(_endTime != b_.endTime && _endTime != b_.startTime, " event conflict - end time");

            if(_startTime < b_.startTime) {                 
                require(_endTime < b_.startTime, " event conflict - end time");
                if(x > 0 && insertIndex_ > 0 && x < insertIndex_){
                    insertIndex_ = x;
                }         
            }
            else { 
                require(_startTime > b_.endTime, " event conflict - start time");
                insertIndex_ = x+1;
            }
        }

        _broadcastId = getId();
        Booking memory booking_ = Booking({
                                broadcastId : _broadcastId,
                                playbackId : _playbackId, 
                                eventContract : _eventContract, 
                                startTime : _startTime, 
                                endTime : _endTime
        });

        startTimes = _startTime.insert(insertIndex_, startTimes);
        allBroadcastIds.push(_broadcastId);
        currentBroadcastIds.push(_broadcastId);

        bookingsByStartTime[_startTime] = booking_; 
        bookingByBroadcastId[_broadcastId] = booking_;     
        return _broadcastId;
    
    }

    function cancelBroadcast(string memory _broadcastId) external returns (bool _cancelled){        
        removeBooking(_broadcastId);
        cancelledBroadcasts.push(_broadcastId);
        return true; 
    }

    function getBroadcast() view external returns (string memory _playbackId, address _eventContract){
        uint256 now_ = block.timestamp; 
        for( uint256 x = 0; x < startTimes.length; x++) {
            uint256 startTime_ = startTimes[x];
            Booking memory booking_ = bookingsByStartTime[startTime_];
            if(startTime_ <= now_ && booking_.endTime > now_) {
                return (booking_.playbackId, booking_.eventContract);
            }
        }
        return ("", address(0)); // replace with stock playback id; 
    }
  
    function getBroadcastSchedule() view external returns (uint256 [] memory _start, uint256 [] memory _end, string [] memory _broadcastId, address [] memory _eventContract ){ 

        _start = new uint256[](startTimes.length);
        _end = new uint256[](startTimes.length);
        _broadcastId = new string[](startTimes.length);
        _eventContract = new address[](startTimes.length);

        for(uint256 x = 0; x < startTimes.length; x++){
            Booking memory booking_ = bookingsByStartTime[startTimes[x]];
            _start[x] = booking_.startTime; 
            _end[x] = booking_.endTime; 
            _broadcastId[x] = booking_.broadcastId; 
            _eventContract[x] = booking_.eventContract; 
        }

        return (_start, _end, _broadcastId, _eventContract );

    }

    function pruneSchedule() external returns (uint256 _countPruned) {
        
        uint256 now_ = block.timestamp; 
        for(uint256 x = 0; x < startTimes.length; x++) {
            uint256 startTime_ = startTimes[x];
            if(startTime_ < now_){
                Booking memory b_ = bookingsByStartTime[startTime_];
                if(b_.endTime < now_){
                    removeBooking(b_.broadcastId);
                    prunedBroadcasts.push(b_.broadcastId);
                    _countPruned++;
                }
            }            
        }
        return _countPruned;
    }


    function updateLimit(string memory _name, uint256 _value) external returns (bool _updated) {
        limitsByName[_name] = _value; 
        return true; 
    }

    // ========================================= INTERNAL ======================================================


    function getId() view internal returns (string memory _id) {
        string memory now_ = block.timestamp.toString(); 
        _id = name.append("_").append(now_);
        return _id; 
    }

    function removeBooking(string memory _broadcastId) internal returns (bool _removed) {
        
        Booking memory booking_ = bookingByBroadcastId[_broadcastId];
        delete bookingByBroadcastId[booking_.broadcastId];
        delete bookingsByStartTime[booking_.startTime];        
        startTimes = booking_.startTime.remove(startTimes);        
        currentBroadcastIds = _broadcastId.remove(currentBroadcastIds);
        return true; 
        
    }

    
    function initSchedulerDefaults() internal { 
        limitsByName[MAX_BOOKING_WINDOW] = 86400 * 30; 
        limitsByName[MAX_BOOKING_DURATION] = 3600 * 8; 
    }

}

