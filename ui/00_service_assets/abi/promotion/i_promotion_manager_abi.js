iPromotionManagerAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "demoteAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_demoted",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getActivePromotions",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_promotionDestinations",
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
				"name": "_destination",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			}
		],
		"name": "getPromotedAddresses",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_addresses",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isPromoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_promoted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_promotionDestinations",
				"type": "string[]"
			}
		],
		"name": "promoteAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_promoted",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]