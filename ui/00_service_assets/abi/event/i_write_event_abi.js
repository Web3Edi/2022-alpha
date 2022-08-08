iW3EWriteEventAbi = [
	{
		"inputs": [],
		"name": "deregister",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_deregistered",
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
				"name": "_action",
				"type": "string"
			}
		],
		"name": "execute",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_done",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAward",
		"outputs": [
			{
				"internalType": "address",
				"name": "_award",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "featureKey",
				"type": "string"
			}
		],
		"name": "getFeatureADDRESSARRAY",
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
				"internalType": "string",
				"name": "_featureKey",
				"type": "string"
			}
		],
		"name": "getFeatureSTR",
		"outputs": [
			{
				"internalType": "string",
				"name": "_featureValue",
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
				"name": "_featureKey",
				"type": "string"
			}
		],
		"name": "getFeatureSTRARRAY",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "_featureValues",
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
				"name": "_featureKey",
				"type": "string"
			}
		],
		"name": "getFeatureUINT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_featureValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStatus",
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
		"inputs": [],
		"name": "getTitle",
		"outputs": [
			{
				"internalType": "string",
				"name": "_title",
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
				"name": "_state",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isState",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_is",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "join",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_joined",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "leave",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_left",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_featureNames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_featureValues",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_numericNames",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_numericValues",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_categories",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_guests",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_promotionDestinations",
				"type": "string[]"
			},
			{
				"internalType": "address",
				"name": "_award",
				"type": "address"
			}
		],
		"name": "populate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_populated",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "register",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_registered",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]