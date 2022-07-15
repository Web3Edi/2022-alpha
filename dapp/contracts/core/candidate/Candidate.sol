// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;


import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "https://github.com/Block-Star-Logic/open-ranking/blob/730cc096747660bcb120607a5aca2b2d3af87d7d/blockchain_ethereum/solidity/V1/interfaces/IOpenRanking.sol";

import "../../interfaces/broadcast/IBroadcastStageManager.sol";
import "../../interfaces/broadcast/IBroadcastScheduler.sol";

import "../../interfaces/candidate/ICandidate.sol";
import "../../interfaces/candidate/ICandidateFeaturesManager.sol";

contract Candidate is ICandidate, IOpenVersion { 

    IOpenRegister register; 

    string name = "WEB_3_EDI_CANDIDATE";
    uint256 version = 1; 

    string OPEN_REGISTER_CA                         = "RESERVED_OPEN_REGISTER_CORE";
    string OPEN_RANKING_CA                          = "RESERVED_OPEN_RANKING_CORE";

    string BROADCAST_STAGE_MANAGER_CA               = "WEB_3_EDI_BROADCAST_STAGE_MANAGER";    
    string BROADCAST_SCHEDULER_CANDIDATE_CA         = "CANDIDATE";

    string CANDIDATE_FEATURES_MANAGER_CA            = "RESERVED_WEB_3_EDI_CANDIDATE_FEATURE_MANAGER";

    string CANDIDATE_EVENTS_KEY                     = "WEB_3_EDI_CANDIDATE_EVENTS_KEY";
    string SCHOOL_EVENTS_KEY                        = "WEB_3_EDI_SCHOOL_EVENTS_KEY";

    string CANDIDATE_TOP_COURSES_RANKING_LIST_KEY           = "WEB_3_EDI_CANDIDATE_TOP_COURSES_LIST";
    string CANDIDATE_TOP_COURSES_RANKING_LIST_LIMIT_KEY     = "WEB_3_EDI_CANDIDATE_TOP_COURSES_LIMIT";

    IBroadcastScheduler scheduler; 
    ICandidateFeaturesManager featuresManager; 
    IOpenRanking ranking; 

    mapping(string=>uint256) limitsByName; 

    constructor(address _registry){ 
        register = IOpenRegister(_registry);

        IBroadcastStageManager stageManager_ = IBroadcastStageManager(register.getAddress(BROADCAST_STAGE_MANAGER_CA));
        scheduler = IBroadcastScheduler(stageManager_.getStageScheduler(BROADCAST_SCHEDULER_CANDIDATE_CA));
        
        featuresManager = ICandidateFeaturesManager(register.getAddress(CANDIDATE_FEATURES_MANAGER_CA));
        
        ranking = IOpenRanking(register.getAddress(OPEN_RANKING_CA));
    }

    function getName() view external returns (string memory _name) {
        return name;         
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }

    function getHappeningNow() view external returns (string memory _playbackId, address _eventContract){
        return scheduler.getBroadcast();
    }

    function getTopCourses() view external returns (address [] memory _topCourses){
        return ranking.getRanking(CANDIDATE_TOP_COURSES_RANKING_LIST_KEY, limitsByName[CANDIDATE_TOP_COURSES_RANKING_LIST_LIMIT_KEY]);
    }

    function getCourses(string memory _category) view external returns (address[] memory _courses){
        return featuresManager.getFeatureADDRESSARRAY(_category);
    }

    function getEvents() view external returns (address [] memory _events){
        return featuresManager.getFeatureADDRESSARRAY(CANDIDATE_EVENTS_KEY);
    }

    function getSchools() view external returns (address [] memory _schools){
        return featuresManager.getFeatureADDRESSARRAY(SCHOOL_EVENTS_KEY);
    }

    function notifyChangeOfAddress() external returns (bool _recieved) {
        register = IOpenRegister(register.getAddress(OPEN_REGISTER_CA));
        
        IBroadcastStageManager stageManager_ = IBroadcastStageManager(register.getAddress(BROADCAST_STAGE_MANAGER_CA));
        scheduler = IBroadcastScheduler(stageManager_.getStageScheduler(BROADCAST_SCHEDULER_CANDIDATE_CA));
        
        featuresManager = ICandidateFeaturesManager(register.getAddress(CANDIDATE_FEATURES_MANAGER_CA));
        
        ranking = IOpenRanking(register.getAddress(OPEN_RANKING_CA));
       return true;
    }

//===================================== INTERNAL =========================================

    function initDefaultLimits() internal { 
        limitsByName[CANDIDATE_TOP_COURSES_RANKING_LIST_LIMIT_KEY] = 10; 
    }

}