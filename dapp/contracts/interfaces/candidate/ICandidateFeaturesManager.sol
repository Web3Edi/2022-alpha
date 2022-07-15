// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;

interface ICandidateFeaturesManager { 

    function getFeatureADDRESSARRAY(string memory _featureKey) view external returns (address [] memory _features);

}