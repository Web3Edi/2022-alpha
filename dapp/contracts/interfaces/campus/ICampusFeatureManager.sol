// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v 0.0.1)

pragma solidity ^0.8.15;

/**
 * @dev interface for autonomous campus promo feature management
 */

interface ICampusFeaturesManager { 

    function getFeaturedItems(string memory _featureKey) view external returns (address [] memory _featuredItems);

}