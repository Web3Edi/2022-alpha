const iBroadcastScheduler = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"name": "cancelBroadcast",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_cancelled",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "closeStage",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_closed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"name": "endBroadcast",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_ended",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailableStages",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_stages",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "getBookings",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "stage",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "broadcastId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "playbackId",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "eventContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct IBroadcastScheduler.Booking[]",
				"name": "_bookings",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "getBroadcast",
		"outputs": [
			{
				"internalType": "string",
				"name": "_playbackId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_eventContract",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_eventContract",
				"type": "address"
			}
		],
		"name": "getBroadcastIdForEvent",
		"outputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "getBroadcastSchedule",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_start",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_broadcastId",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "_eventContract",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"name": "getBroadcastStatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "getStageDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "allBroadcastIds",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "currentBroadcastIds",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "endedBroadcasts",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "cancelledBroadcasts",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "prunedBroadcasts",
						"type": "string[]"
					},
					{
						"internalType": "uint256[]",
						"name": "startTimes",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "openDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "closeDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "closed",
						"type": "bool"
					}
				],
				"internalType": "struct IBroadcastScheduler.Stage",
				"name": "_s",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"name": "openStage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_stageId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_eventContract",
				"type": "address"
			}
		],
		"name": "requestBroadcast",
		"outputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_broadcastId",
				"type": "string"
			}
		],
		"name": "startBroadcast",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_started",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]