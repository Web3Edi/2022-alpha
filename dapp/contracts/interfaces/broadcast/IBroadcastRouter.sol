// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v 0.0.1)

pragma solidity ^0.8.15;

/**
 * @dev interface for autonomous broadcast stage routing
 */

interface IBroadcastRouter { 

    struct Broadcast{ 
        string broadcastId; 
        string stage;
        uint256 startTime;
        uint256 endTime; 
        string playbackId; 
        address eventContract;
        address scheduler; 
    }

    function getBroadcastDetails(string memory broadcastId) view external returns (Broadcast memory _broadcast);

    function scheduleBroadcast(string memory _stage, uint256 _startTime, uint256 _endTime, string memory _playbackId, address _eventContract) external returns (string memory _broadcastId);

    function cancelBroadcast(string memory _broadcastId) external returns (bool _cancelled);

}