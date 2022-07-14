// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v 0.0.1)

pragma solidity ^0.8.15;

/**
 * @dev interface for autonomous broadcast stage management
 */

interface IBroadcastStageManager { 

    function getStageScheduler(string memory _stageName) view external returns (address _scheduler);

}