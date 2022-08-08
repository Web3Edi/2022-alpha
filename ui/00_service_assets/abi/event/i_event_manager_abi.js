iW3EEventManagerAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
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
		"name": "createEvent",
		"outputs": [
			{
				"internalType": "address",
				"name": "_event",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEvents",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_events",
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
				"name": "_status",
				"type": "string"
			}
		],
		"name": "getEvents",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_events",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]