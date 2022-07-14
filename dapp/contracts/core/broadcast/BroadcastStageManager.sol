// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1)

pragma solidity ^0.8.15;

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "https://github.com/Block-Star-Logic/open-libraries/blob/703b21257790c56a61cd0f3d9de3187a9012e2b3/blockchain_ethereum/solidity/V1/libraries/LOpenUtilities.sol";

import "../../interfaces/broadcast/IBroadcastStageManager.sol";

/**
 * @dev implementation of the {IBroadcastStageManager} interface
 */

contract BroadcastStageManager is IBroadcastStageManager, IOpenVersion {

    using LOpenUtilities for string; 

    string name             = "WEB_3_EDI_BROADCAST_STAGE_MANAGER"; 
    uint256 version         = 1; 

    string OPEN_REGISTER_CA = "RESERVED_OPEN_REGISTER_CORE";


    IOpenRegister registry; 

    string [] stageNames; 
    mapping(string=>address) stageSChedulerByStageName; 

    constructor(address _registry) { 
       registry = IOpenRegister(_registry);
    }

    function getName() view external returns (string memory _name) {
        return name; 
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }

    function getStageScheduler(string memory _stageName) view external returns (address _scheduler){
        return stageSChedulerByStageName[_stageName];
    }

    function getStageNames() view external returns (string [] memory _stageName) {
        return stageNames; 
    }

    function addStageScheduler(string memory _stageName, address _schedulerAddress) external returns (bool _added) {
        stageNames.push(_stageName);
        stageSChedulerByStageName[_stageName] = _schedulerAddress;
        return true; 
    }

    function removeStageScheduler(string memory _stageName) external returns (bool _removed) {
        stageNames = _stageName.remove(stageNames);
        delete stageSChedulerByStageName[_stageName];
        return true; 
    }

    
    function notifyChangeOfAddress() external returns (bool _recieved) {
       registry = IOpenRegister(registry.getAddress(OPEN_REGISTER_CA));
       return true;
    }
}