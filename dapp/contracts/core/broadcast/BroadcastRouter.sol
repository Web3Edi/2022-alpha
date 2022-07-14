// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1)

pragma solidity ^0.8.15;

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "../../interfaces/broadcast/IBroadcastStageManager.sol";
import "../../interfaces/broadcast/IBroadcastScheduler.sol"; 
import "../../interfaces/broadcast/IBroadcastRouter.sol";

/**
 * @dev implmentation of the {IBroadcastRouter} interface
 */ 

contract BroadcastRouter is IBroadcastRouter, IOpenVersion { 

    string name = "WEB_3_EDI_BROADCAST_SCHEDULER_STAGE_"; 
    uint256 version = 1; 

    string BROAD_CAST_SCHEDULER_CA = "WEB_3_EDI_BROADCAST_STAGE_MANAGER"; 
    string OPEN_REGISTER_CA        = "RESERVED_OPEN_REGISTER_CORE";

    IBroadcastStageManager stageManager; 
    IOpenRegister registry;

    mapping(string=>Broadcast) broadcastByBroadcastId; 

    constructor(address _registry) { 
       registry = IOpenRegister(_registry);
       stageManager = IBroadcastStageManager(registry.getAddress(BROAD_CAST_SCHEDULER_CA));
    }

    function getName() view external returns (string memory _name) {
        return name; 
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }

    function getBroadcastDetails(string memory _broadcastId) view external returns (Broadcast memory _broadcast){
        return broadcastByBroadcastId[_broadcastId];
    }

    function scheduleBroadcast(string memory _stage, uint256 _startTime, uint256 _endTime, string memory _playbackId, address _eventContract) external returns (string memory _broadcastId){
        IBroadcastScheduler scheduler_ = IBroadcastScheduler(stageManager.getStageScheduler(_stage));
        _broadcastId = scheduler_.requestBroadcast(_startTime, _endTime, _playbackId, _eventContract);
        Broadcast memory broadcast_ = Broadcast({
                                                    broadcastId :_broadcastId,
                                                    stage : _stage, 
                                                    startTime : _startTime,
                                                    endTime : _endTime,
                                                    playbackId : _playbackId,
                                                    eventContract : _eventContract,
                                                    scheduler : address(scheduler_)
                                                });
        broadcastByBroadcastId[_broadcastId] = broadcast_; 
        return _broadcastId; 
    }

    function cancelBroadcast(string memory _broadcastId) external returns (bool _cancelled){
        Broadcast memory broadcast_ = broadcastByBroadcastId[_broadcastId];
        IBroadcastScheduler scheduler_ = IBroadcastScheduler(broadcast_.scheduler);
        return scheduler_.cancelBroadcast(_broadcastId);
    }
    

    function notifyChangeOfAddress() external returns (bool _recieved) {
       registry = IOpenRegister(registry.getAddress(OPEN_REGISTER_CA));
       stageManager = IBroadcastStageManager(registry.getAddress(BROAD_CAST_SCHEDULER_CA));

       return true;
    }

    // ==================================== INTERNAL ============================================
}