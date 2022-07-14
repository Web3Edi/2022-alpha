const iBroadcastRouter = [
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
				"name": "broadcastId",
				"type": "string"
			}
		],
		"name": "getBroadcastDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "broadcastId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "stage",
						"type": "string"
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
						"name": "playbackId",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "eventContract",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "scheduler",
						"type": "address"
					}
				],
				"internalType": "struct IBroadcastRouter.Broadcast",
				"name": "_broadcast",
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
			},
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
		"name": "scheduleBroadcast",
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