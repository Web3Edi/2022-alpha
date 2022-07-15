const iW3ECandidateAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			}
		],
		"name": "getCourses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_courses",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
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
		"inputs": [],
		"name": "getHappeningNow",
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
		"name": "getSchools",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_schools",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]