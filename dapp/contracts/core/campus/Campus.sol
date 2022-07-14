// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";
import "https://github.com/Block-Star-Logic/open-libraries/blob/703b21257790c56a61cd0f3d9de3187a9012e2b3/blockchain_ethereum/solidity/V1/libraries/LOpenUtilities.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "https://github.com/Block-Star-Logic/open-ranking/blob/730cc096747660bcb120607a5aca2b2d3af87d7d/blockchain_ethereum/solidity/V1/interfaces/IOpenRanking.sol";


import "../../interfaces/broadcast/IBroadcastScheduler.sol";

import "../../interfaces/campus/ICampus.sol";
import "../../interfaces/campus/ICampusFeaturesManager.sol";

/**
 * @dev implementation of the {ICampus} interface
 */

contract Campus is ICampus, IOpenVersion { 

    string name                                     = "WEB_3_EDI_CAMPUS"; 
    uint256 version                                 = 1; 

    string OPEN_REGISTER_CA                         = "RESERVED_OPEN_REGISTER_CORE";
    string OPEN_RANKING_CA                          = "RESERVED_OPEN_RANKING_CORE";

    string BROAD_CAST_SCHEDULER_CAMPUS_CA           = "WEB_3_EDI_BROADCAST_SCHEDULER_STAGE_CAMPUS";
    string CAMPUS_FEATURES_MANAGER_CA               = "WEB_3_EDI_CAMPUS_FEATURE_MANAGER";

    string POPULAR_ITEMS_RANKING_LIST_KEY           = "WEB_3_EDI_POPULAR_ITEMS_LIST";
    string POPULAR_ITEMS_RANKING_LIST_LIMIT_KEY     = "WEB_3_EDI_POPULAR_ITEMS_LIMIT";
    string POPULAR_TOPICS_RANKING_LIST_KEY          = "WEB_3_EDI_POPULAR_TOPICS_LIST";
    string POPULAR_TOPICS_RANKING_LIST_LIMIT_KEY    = "WEB_3_EDI_POPULAR_TOPICS_LIMIT";

    string PREMIUM_FEATURED_ITEMS_KEY               = "WEB_3_EDI_CAMPUS_PREMIUM_FEATURED_ITEMS";
    string PREMIUM_FEATURED_EVENTS_KEY              = "WEB_3_EDI_CAMPUS_PREMIUM_FEATURED_EVENTS";


    IOpenRegister registry;     
    IBroadcastScheduler scheduler; 
    ICampusFeaturesManager featuresManager; 
    IOpenRanking ranking; 

    mapping(string=>uint256) limitsByName; 

    constructor(address _register) {
        registry = IOpenRegister(_register);
        scheduler = IBroadcastScheduler(registry.getAddress(BROAD_CAST_SCHEDULER_CAMPUS_CA));
        featuresManager = ICampusFeaturesManager(registry.getAddress(CAMPUS_FEATURES_MANAGER_CA));
        ranking = IOpenRanking(registry.getAddress(OPEN_RANKING_CA));
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

    function getPremiumFeaturedItems() view external returns (address [] memory _featuredItems){
        return featuresManager.getFeaturedItems(PREMIUM_FEATURED_ITEMS_KEY);
    }

    function getPremiumFeaturedEvents() view external returns (address [] memory _eventContract){
        return featuresManager.getFeaturedItems(PREMIUM_FEATURED_EVENTS_KEY);
    }

    function getCategoryFeatures(string memory _category) view external returns (address [] memory _features){
         return featuresManager.getFeaturedItems(_category);
    }

    function getPopularItems() view external returns (address [] memory _popularItems){
        return ranking.getRanking(POPULAR_ITEMS_RANKING_LIST_KEY, limitsByName[POPULAR_ITEMS_RANKING_LIST_LIMIT_KEY]);
    }

    function getPopularLearningTopics() view external returns (string [] memory _popularLearningTopics){
        //return ranking.getRanking(POPULAR_TOPICS_RANKING_LIST_KEY, limitsByName[POPULAR_TOPICS_RANKING_LIST_LIMIT_KEY]);
        return new string[](0);
    }

    function notifyChangeOfAddress() external returns (bool _recieved) {
            registry = IOpenRegister(registry.getAddress(OPEN_REGISTER_CA));
            scheduler = IBroadcastScheduler(registry.getAddress(BROAD_CAST_SCHEDULER_CAMPUS_CA));
            featuresManager = ICampusFeaturesManager(registry.getAddress(CAMPUS_FEATURES_MANAGER_CA));
            ranking = IOpenRanking(registry.getAddress(OPEN_RANKING_CA));
       return true;
    }
}