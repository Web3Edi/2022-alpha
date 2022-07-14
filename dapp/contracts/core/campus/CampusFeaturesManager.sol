// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";
import "https://github.com/Block-Star-Logic/open-libraries/blob/703b21257790c56a61cd0f3d9de3187a9012e2b3/blockchain_ethereum/solidity/V1/libraries/LOpenUtilities.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "../../interfaces/campus/ICampusFeaturesManager.sol";

/**
 * @dev implementation of {ICampusFeaturesManager} interface
 */

contract CampusFeaturesManager is ICampusFeaturesManager, IOpenVersion { 

    using LOpenUtilities for string; 

    string name                                     = "WEB_3_EDI_CAMPUS_FEATURE_MANAGER"; 
    uint256 version                                 = 1; 

    string OPEN_REGISTER_CA                         = "RESERVED_OPEN_REGISTER_CORE";

    IOpenRegister registry; 

    string [] featureKeys; 
    mapping(string=>bool) knownKey; 
    mapping(string=>address[]) featureItemsByAddress; 

    constructor(address _registry){
        registry = IOpenRegister(_registry);
    }
    
    function getName() view external returns (string memory _name) {
        return name; 
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }
    
    function notifyChangeOfAddress() external returns (bool _recieved) {
       registry = IOpenRegister(registry.getAddress(OPEN_REGISTER_CA));
       return true;
    }

    function getFeaturedItems(string memory _featureKey) view external returns (address [] memory _featuredItems){
        return featureItemsByAddress[_featureKey];
    }

    function getFeatureKeys() view external returns (string [] memory _featureKeys) {
        return featureKeys; 
    }


    function addFeatureItems(string memory _featureKey, address [] memory _items) external returns (bool _added) {
        require(!knownKey[_featureKey], " known key ");
        featureKeys.push(_featureKey);
        featureItemsByAddress[_featureKey] = _items; 
        knownKey[_featureKey] = true; 
        return true; 
    }

    function removeFeatureItems(string memory _featureKey) external returns (bool _removed) {
        delete featureItemsByAddress[_featureKey];
        delete knownKey[_featureKey]; 
        featureKeys = _featureKey.remove(featureKeys);
        return true; 
    }

}