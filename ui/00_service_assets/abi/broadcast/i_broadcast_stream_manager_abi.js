iW3EBroadcastStreamManagerAbi = [
	{
		"inputs": [],
		"name": "getStreamDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "streamKey",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "playbackId",
						"type": "string"
					}
				],
				"internalType": "struct IBroadcastStreamManager.StreamDetails",
				"name": "_streamDetails",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasStreamDetails",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_hasDetails",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_streamKey",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_playbackId",
				"type": "string"
			}
		],
		"name": "postStreamDetails",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_posted",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]