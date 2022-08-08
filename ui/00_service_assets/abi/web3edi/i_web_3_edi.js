iWeb3EdiAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "delistOpenVersionAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_deListed",
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
				"name": "_category",
				"type": "string"
			}
		],
		"name": "getListings",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "_listings",
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
		"name": "listOpenVersionAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_listed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]