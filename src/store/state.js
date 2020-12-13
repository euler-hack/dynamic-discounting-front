let abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_hasAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_minPercent",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "CreatedAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_newContractAddress",
          "type": "address"
        }
      ],
      "name": "ExecutedAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_responder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_discountPercent",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_needAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "RespondAuction",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_hasAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minPercent",
          "type": "uint256"
        }
      ],
      "name": "createAuction",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_needAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_discountPercent",
          "type": "uint256"
        }
      ],
      "name": "respondAuction",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "executeAuction",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getAuctionDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "minPercent",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "hasAmount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "signedContract",
              "type": "address"
            }
          ],
          "internalType": "struct DiscountingTypes.Auction",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "getContractDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "supplierAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "needAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountPercent",
              "type": "uint256"
            }
          ],
          "internalType": "struct DiscountingTypes.Supplier[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAuctionsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getAuctionSuppliers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "supplierAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "needAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountPercent",
              "type": "uint256"
            }
          ],
          "internalType": "struct DiscountingTypes.Supplier[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOtherOpenAuctions",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyOpenAuctions",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getClosedAuctions",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "supplierAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "needAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountPercent",
              "type": "uint256"
            }
          ],
          "internalType": "struct DiscountingTypes.Supplier[]",
          "name": "data",
          "type": "tuple[]"
        }
      ],
      "name": "sort",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "supplierAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "needAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "discountPercent",
              "type": "uint256"
            }
          ],
          "internalType": "struct DiscountingTypes.Supplier[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

    
let state = {
    ethereum: null,
    networkId: null,
    contractInstance: null,
    abi: abi,
    contract_address: "0xa57D758cd022f9C59f3A969382A15E4Fa962D454"
}
export default state
