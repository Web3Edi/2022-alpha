// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v 0.0.1)

pragma solidity ^0.8.15;

/**
 * @dev interface for autonomous campus UI display 
 */

interface ICampus { 
    
    function getHappeningNow() view external returns (string memory _streamId, address _eventContract);

    function getPremiumFeaturedItems() view external returns (address [] memory _featuredItems);

    function getPremiumFeaturedEvents() view external returns (address [] memory _eventContract);

    function getCategoryFeatures(string memory _category) view external returns (address [] memory _features);    

    function getPopularItems() view external returns (address [] memory _popularItems);

    function getPopularLearningTopics() view external returns (string [] memory _popularLearningTopics); 

}