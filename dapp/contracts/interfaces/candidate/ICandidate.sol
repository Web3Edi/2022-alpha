// SPDX-License-Identifier: GPL-3.0
// Web 3 Edi Contracts (last updated v0.0.1) 

pragma solidity ^0.8.15;

interface ICandidate { 

    function getHappeningNow() view external returns (string memory _playbackId, address _eventContract);

    function getCourses(string memory _category) view external returns (address[] memory _courses);

    function getEvents() view external returns (address [] memory _events);

    function getSchools() view external returns (address [] memory _schools);

}