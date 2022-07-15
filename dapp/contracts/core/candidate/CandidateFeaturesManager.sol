// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;

import "https://github.com/Block-Star-Logic/open-version/blob/e161e8a2133fbeae14c45f1c3985c0a60f9a0e54/blockchain_ethereum/solidity/V1/interfaces/IOpenVersion.sol";

import "https://github.com/Block-Star-Logic/open-register/blob/7b680903d8bb0443b9626a137e30a4d6bb1f6e43/blockchain_ethereum/solidity/V1/interfaces/IOpenRegister.sol";

import "../../interfaces/candidate/ICandidateFeaturesManager.sol";

contract CandidateFeatureesManager is ICandidateFeaturesManager, IOpenVersion { 

    string name                                     = "RESERVED_WEB_3_EDI_CANDIDATE_FEATURE_MANAGER"; 
    uint256 version                                 = 1; 

    string OPEN_REGISTER_CA                         = "RESERVED_OPEN_REGISTER_CORE";

    IOpenRegister register; 

    mapping(string=>address[]) valueByKey; 

    constructor(address _registry) {
        register = IOpenRegister(_registry);
    }

    function getName() view external returns (string memory _name) {
        return name; 
    }

    function getVersion() view external returns (uint256 _version) {
        return version; 
    }

    function getFeatureADDRESSARRAY(string memory _featureKey) view external returns (address [] memory _features){
        return valueByKey[_featureKey];
    }

    function addFeatureADDRESSARRAY(string memory _featureKey, address [] memory _features) external returns (bool) {
        valueByKey[_featureKey] = _features; 
        return true;
    }

    function removeFeatureADDRESSARRAY(string memory _featureKey) external returns (bool) {
        delete valueByKey[_featureKey];
        return true; 
    }

}