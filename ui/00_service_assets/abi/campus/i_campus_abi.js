const iW3ECampusAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			}
		],
		"name": "getCategoryFeatures",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_features",
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
		"name": "getPopularItems",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_popularItems",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPopularLearningTopics",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_popularLearningTopics",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPremiumFeaturedEvents",
		"outputs": [
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
		"name": "getPremiumFeaturedItems",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_featuredItems",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]