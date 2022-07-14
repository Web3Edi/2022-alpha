// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v 0.0.1)

pragma solidity ^0.8.15;
/**
 * @dev interface for autonomous broadcast scheduling
 */

interface IBroadcastScheduler { 

    function getStageName() view external returns (string memory _stage);

    function requestBroadcast(uint256 _startTime, uint256 _endTime, string memory _playbackId, address _eventContract) external returns (string memory _broadcastId);

    function cancelBroadcast(string memory _broadcastId) external returns (bool _cancelled);

    function getBroadcast() view external returns (string memory _playbackId, address _eventContract);

    function getBroadcastSchedule() view external returns (uint256 [] memory _start, uint256 [] memory _end, string  [] memory _broadcastId, address [] memory _eventContract );

}
