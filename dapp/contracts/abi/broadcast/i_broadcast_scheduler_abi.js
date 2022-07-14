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
		"inputs": [],
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
		"inputs": [],
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
		"inputs": [],
		"name": "getStageName",
		"outputs": [
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			},
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
	}
]