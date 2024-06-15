export const MusicWalletJson = {
  "contractName": "MusicWallet",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MusicWallet.sol\":\"MusicWallet\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/MusicWallet.sol\":{\"keccak256\":\"0x90283c238cb536b39578645d1892f98dcbe553dc16fef809cfa2392ffa81332e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4f118fd517ddeb5cfe6c934b6174de40153a6e0b11b731048a32d5511fa5edc3\",\"dweb:/ipfs/Qmbk2VcSAiVdEswGebhkX4iwYrjmSo8JoNeXZLVGVnqv3W\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610a90806100206000396000f3fe60806040526004361061004a5760003560e01c806312065fe01461004f5780632e1a7d4d1461007a57806370a08231146100a3578063a9059cbb146100e0578063d0e30db0146100fc575b600080fd5b34801561005b57600080fd5b50610064610106565b604051610071919061090b565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610707565b61014c565b005b3480156100af57600080fd5b506100ca60048036038101906100c591906106a2565b6102fd565b6040516100d7919061090b565b60405180910390f35b6100fa60048036038101906100f591906106cb565b610345565b005b610104610590565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000811161018f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610186906108eb565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610207906108ab565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461025e919061098d565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102ab573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364826040516102f2919061090b565b60405180910390a250565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156103b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ac9061088b565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d906108ab565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610484919061098d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104d99190610937565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610526573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610584919061090b565b60405180910390a35050565b600034116105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca906108cb565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106219190610937565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3460405161066e919061090b565b60405180910390a2565b60008135905061068781610a2c565b92915050565b60008135905061069c81610a43565b92915050565b6000602082840312156106b457600080fd5b60006106c284828501610678565b91505092915050565b600080604083850312156106de57600080fd5b60006106ec85828601610678565b92505060206106fd8582860161068d565b9150509250929050565b60006020828403121561071957600080fd5b60006107278482850161068d565b91505092915050565b600061073d600f83610926565b91507f496e76616c6964206164647265737300000000000000000000000000000000006000830152602082019050919050565b600061077d601483610926565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b60006107bd602883610926565b91507f4465706f73697420616d6f756e74206d7573742062652067726561746572207460008301527f68616e207a65726f0000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610823602b83610926565b91507f5769746864726177616c20616d6f756e74206d7573742062652067726561746560008301527f72207468616e207a65726f0000000000000000000000000000000000000000006020830152604082019050919050565b610885816109f3565b82525050565b600060208201905081810360008301526108a481610730565b9050919050565b600060208201905081810360008301526108c481610770565b9050919050565b600060208201905081810360008301526108e4816107b0565b9050919050565b6000602082019050818103600083015261090481610816565b9050919050565b6000602082019050610920600083018461087c565b92915050565b600082825260208201905092915050565b6000610942826109f3565b915061094d836109f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610982576109816109fd565b5b828201905092915050565b6000610998826109f3565b91506109a3836109f3565b9250828210156109b6576109b56109fd565b5b828203905092915050565b60006109cc826109d3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610a35816109c1565b8114610a4057600080fd5b50565b610a4c816109f3565b8114610a5757600080fd5b5056fea264697066735822122089ce22f5724d4e080e9cf19cb61688a8c7677ad2b071f04fbd149e29ea70950f64736f6c63430008000033",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c806312065fe01461004f5780632e1a7d4d1461007a57806370a08231146100a3578063a9059cbb146100e0578063d0e30db0146100fc575b600080fd5b34801561005b57600080fd5b50610064610106565b604051610071919061090b565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610707565b61014c565b005b3480156100af57600080fd5b506100ca60048036038101906100c591906106a2565b6102fd565b6040516100d7919061090b565b60405180910390f35b6100fa60048036038101906100f591906106cb565b610345565b005b610104610590565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000811161018f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610186906108eb565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610207906108ab565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461025e919061098d565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102ab573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364826040516102f2919061090b565b60405180910390a250565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156103b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ac9061088b565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d906108ab565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610484919061098d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104d99190610937565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610526573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610584919061090b565b60405180910390a35050565b600034116105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca906108cb565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106219190610937565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3460405161066e919061090b565b60405180910390a2565b60008135905061068781610a2c565b92915050565b60008135905061069c81610a43565b92915050565b6000602082840312156106b457600080fd5b60006106c284828501610678565b91505092915050565b600080604083850312156106de57600080fd5b60006106ec85828601610678565b92505060206106fd8582860161068d565b9150509250929050565b60006020828403121561071957600080fd5b60006107278482850161068d565b91505092915050565b600061073d600f83610926565b91507f496e76616c6964206164647265737300000000000000000000000000000000006000830152602082019050919050565b600061077d601483610926565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b60006107bd602883610926565b91507f4465706f73697420616d6f756e74206d7573742062652067726561746572207460008301527f68616e207a65726f0000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610823602b83610926565b91507f5769746864726177616c20616d6f756e74206d7573742062652067726561746560008301527f72207468616e207a65726f0000000000000000000000000000000000000000006020830152604082019050919050565b610885816109f3565b82525050565b600060208201905081810360008301526108a481610730565b9050919050565b600060208201905081810360008301526108c481610770565b9050919050565b600060208201905081810360008301526108e4816107b0565b9050919050565b6000602082019050818103600083015261090481610816565b9050919050565b6000602082019050610920600083018461087c565b92915050565b600082825260208201905092915050565b6000610942826109f3565b915061094d836109f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610982576109816109fd565b5b828201905092915050565b6000610998826109f3565b91506109a3836109f3565b9250828210156109b6576109b56109fd565b5b828203905092915050565b60006109cc826109d3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610a35816109c1565b8114610a4057600080fd5b50565b610a4c816109f3565b8114610a5757600080fd5b5056fea264697066735822122089ce22f5724d4e080e9cf19cb61688a8c7677ad2b071f04fbd149e29ea70950f64736f6c63430008000033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:6139:1",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:87:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "69:29:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "91:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "78:12:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "78:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "69:5:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "134:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "107:26:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "107:33:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "107:33:1"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "37:6:1",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "45:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "53:5:1",
                "type": ""
              }
            ],
            "src": "7:139:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "204:87:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "214:29:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "236:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "223:12:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "223:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "214:5:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "279:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "252:26:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "252:33:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "252:33:1"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "182:6:1",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "190:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "198:5:1",
                "type": ""
              }
            ],
            "src": "152:139:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "363:196:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "409:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "418:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "421:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "411:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "411:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "411:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "384:7:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "393:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "380:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "380:23:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "405:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "376:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "376:32:1"
                  },
                  "nodeType": "YulIf",
                  "src": "373:2:1"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "435:117:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "450:15:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "464:1:1",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "454:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "479:63:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "514:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "525:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "510:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "510:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "534:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "489:20:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "489:53:1"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "479:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "333:9:1",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "344:7:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "356:6:1",
                "type": ""
              }
            ],
            "src": "297:262:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "648:324:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "694:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "703:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "706:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "696:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "696:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "696:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "669:7:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "678:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "665:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "665:23:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "690:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "661:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "661:32:1"
                  },
                  "nodeType": "YulIf",
                  "src": "658:2:1"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "720:117:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "735:15:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "749:1:1",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "739:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "764:63:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "799:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "810:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "795:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "795:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "819:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "774:20:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "774:53:1"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "764:6:1"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "847:118:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "862:16:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "876:2:1",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "866:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "892:63:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "927:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "938:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "923:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "923:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "947:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "902:20:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "902:53:1"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "892:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "610:9:1",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "621:7:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "633:6:1",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "641:6:1",
                "type": ""
              }
            ],
            "src": "565:407:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1044:196:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1090:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1099:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1102:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1092:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1092:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1092:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1065:7:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1074:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1061:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1061:23:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1086:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1057:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1057:32:1"
                  },
                  "nodeType": "YulIf",
                  "src": "1054:2:1"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1116:117:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1131:15:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1145:1:1",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1135:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1160:63:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1195:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1206:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1191:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1191:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1215:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1170:20:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1170:53:1"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1160:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1014:9:1",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1025:7:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1037:6:1",
                "type": ""
              }
            ],
            "src": "978:262:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1392:167:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1402:74:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1468:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1473:2:1",
                        "type": "",
                        "value": "15"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1409:58:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1409:67:1"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1402:3:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1497:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1502:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1493:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1493:11:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1506:17:1",
                        "type": "",
                        "value": "Invalid address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1486:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1486:38:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1486:38:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1534:19:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1545:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1550:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1541:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1541:12:1"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1534:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1380:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1388:3:1",
                "type": ""
              }
            ],
            "src": "1246:313:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1711:172:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1721:74:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1787:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1792:2:1",
                        "type": "",
                        "value": "20"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1728:58:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1728:67:1"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1721:3:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1816:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1821:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1812:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1812:11:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1825:22:1",
                        "type": "",
                        "value": "Insufficient balance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1805:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1805:43:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1805:43:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1858:19:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1869:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1874:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1865:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1865:12:1"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1858:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1699:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1707:3:1",
                "type": ""
              }
            ],
            "src": "1565:318:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2035:226:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2045:74:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2111:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2116:2:1",
                        "type": "",
                        "value": "40"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2052:58:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2052:67:1"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2045:3:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2140:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2145:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2136:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2136:11:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2149:34:1",
                        "type": "",
                        "value": "Deposit amount must be greater t"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2129:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2129:55:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2129:55:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2205:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2210:2:1",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2201:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2201:12:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2215:10:1",
                        "type": "",
                        "value": "han zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2194:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2194:32:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2194:32:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2236:19:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2247:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2252:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2243:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2243:12:1"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2236:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2023:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2031:3:1",
                "type": ""
              }
            ],
            "src": "1889:372:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2413:229:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2423:74:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2489:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2494:2:1",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2430:58:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2430:67:1"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2423:3:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2518:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2523:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2514:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2514:11:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2527:34:1",
                        "type": "",
                        "value": "Withdrawal amount must be greate"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2507:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2507:55:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2507:55:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2583:3:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2588:2:1",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2579:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2579:12:1"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2593:13:1",
                        "type": "",
                        "value": "r than zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2572:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2572:35:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2572:35:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2617:19:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2628:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2633:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2624:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2624:12:1"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2617:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2401:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2409:3:1",
                "type": ""
              }
            ],
            "src": "2267:375:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2713:53:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2730:3:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2753:5:1"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2735:17:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2735:24:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2723:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2723:37:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2723:37:1"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2701:5:1",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2708:3:1",
                "type": ""
              }
            ],
            "src": "2648:118:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2943:248:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2953:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2965:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2976:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2961:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2961:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2953:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3000:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3011:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2996:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2996:17:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3019:4:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3025:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3015:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3015:20:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2989:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2989:47:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2989:47:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3045:139:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3179:4:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3053:124:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3053:131:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3045:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2923:9:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2938:4:1",
                "type": ""
              }
            ],
            "src": "2772:419:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3368:248:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3378:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3390:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3401:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3386:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3386:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3378:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3425:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3436:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3421:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3421:17:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3444:4:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3450:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3440:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3440:20:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3414:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3414:47:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3414:47:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3470:139:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3604:4:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3478:124:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3478:131:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3470:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3348:9:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3363:4:1",
                "type": ""
              }
            ],
            "src": "3197:419:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3793:248:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3803:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3815:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3826:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3811:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3811:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3803:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3850:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3861:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3846:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3846:17:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3869:4:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3875:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3865:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3865:20:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3839:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3839:47:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3839:47:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3895:139:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4029:4:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3903:124:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3903:131:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3895:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3773:9:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3788:4:1",
                "type": ""
              }
            ],
            "src": "3622:419:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4218:248:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4228:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4240:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4251:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4236:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4236:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4228:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4275:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4286:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4271:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4271:17:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4294:4:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4300:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4290:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4290:20:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4264:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4264:47:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4264:47:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4320:139:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4454:4:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4328:124:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4328:131:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4320:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4198:9:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4213:4:1",
                "type": ""
              }
            ],
            "src": "4047:419:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4570:124:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4580:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4592:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4603:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4588:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4588:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4580:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4660:6:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4673:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4684:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4669:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4669:17:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4616:43:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4616:71:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4616:71:1"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4542:9:1",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4554:6:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4565:4:1",
                "type": ""
              }
            ],
            "src": "4472:222:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4796:73:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4813:3:1"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4818:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4806:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4806:19:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4806:19:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4834:29:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4853:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4858:4:1",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4849:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4849:14:1"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "4834:11:1"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4768:3:1",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4773:6:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "4784:11:1",
                "type": ""
              }
            ],
            "src": "4700:169:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4919:261:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4929:25:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4952:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "4934:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4934:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "4929:1:1"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4963:25:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4986:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "4968:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4968:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "4963:1:1"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5126:22:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "5128:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5128:18:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5128:18:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5047:1:1"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5054:66:1",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "5122:1:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5050:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5050:74:1"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5044:2:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5044:81:1"
                  },
                  "nodeType": "YulIf",
                  "src": "5041:2:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5158:16:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5169:1:1"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "5172:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5165:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5165:9:1"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "5158:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "4906:1:1",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "4909:1:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "4915:3:1",
                "type": ""
              }
            ],
            "src": "4875:305:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5231:146:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5241:25:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5264:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "5246:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5246:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "5241:1:1"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5275:25:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "5298:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "5280:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5280:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "5275:1:1"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5322:22:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "5324:16:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5324:18:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5324:18:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5316:1:1"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "5319:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "5313:2:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5313:8:1"
                  },
                  "nodeType": "YulIf",
                  "src": "5310:2:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5354:17:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5366:1:1"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "5369:1:1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "5362:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5362:9:1"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "5354:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "5217:1:1",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "5220:1:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "5226:4:1",
                "type": ""
              }
            ],
            "src": "5186:191:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5428:51:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5438:35:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5467:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "5449:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5449:24:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5438:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5410:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5420:7:1",
                "type": ""
              }
            ],
            "src": "5383:96:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5530:81:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5540:65:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5555:5:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5562:42:1",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "5551:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5551:54:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5540:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5512:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5522:7:1",
                "type": ""
              }
            ],
            "src": "5485:126:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5662:32:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5672:16:1",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5683:5:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "5672:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5644:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "5654:7:1",
                "type": ""
              }
            ],
            "src": "5617:77:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5728:152:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5745:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5748:77:1",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5738:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5738:88:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5738:88:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5842:1:1",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5845:4:1",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5835:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5835:15:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5835:15:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5866:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5869:4:1",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "5859:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5859:15:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5859:15:1"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "5700:180:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5929:79:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5986:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5995:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5998:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5988:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5988:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5988:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5952:5:1"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "5977:5:1"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "5959:17:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5959:24:1"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "5949:2:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5949:35:1"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5942:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5942:43:1"
                  },
                  "nodeType": "YulIf",
                  "src": "5939:2:1"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5922:5:1",
                "type": ""
              }
            ],
            "src": "5886:122:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6057:79:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6114:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6123:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6126:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6116:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6116:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6116:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6080:5:1"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6105:5:1"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "6087:17:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6087:24:1"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "6077:2:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6077:35:1"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6070:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6070:43:1"
                  },
                  "nodeType": "YulIf",
                  "src": "6067:2:1"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6050:5:1",
                "type": ""
              }
            ],
            "src": "6014:122:1"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 15)\n\n        mstore(add(pos, 0), \"Invalid address\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n\n        mstore(add(pos, 0), \"Insufficient balance\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 40)\n\n        mstore(add(pos, 0), \"Deposit amount must be greater t\")\n\n        mstore(add(pos, 32), \"han zero\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n\n        mstore(add(pos, 0), \"Withdrawal amount must be greate\")\n\n        mstore(add(pos, 32), \"r than zero\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 1,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "90:1419:0:-:0;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "90:1419:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;586:98;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1061:334;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1403:103;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;692:361;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;369:209;;;:::i;:::-;;586:98;629:7;656:8;:20;665:10;656:20;;;;;;;;;;;;;;;;649:27;;586:98;:::o;1061:334::-;1130:1;1121:6;:10;1113:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;1222:6;1198:8;:20;1207:10;1198:20;;;;;;;;;;;;;;;;:30;;1190:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1290:6;1266:8;:20;1275:10;1266:20;;;;;;;;;;;;;;;;:30;;;;;;;:::i;:::-;;;;;;;;1315:10;1307:28;;:36;1336:6;1307:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1368:10;1359:28;;;1380:6;1359:28;;;;;;:::i;:::-;;;;;;;;1061:334;:::o;1403:103::-;1457:7;1484:8;:14;1493:4;1484:14;;;;;;;;;;;;;;;;1477:21;;1403:103;;;:::o;692:361::-;786:1;772:16;;:2;:16;;;;764:44;;;;;;;;;;;;:::i;:::-;;;;;;;;;851:6;827:8;:20;836:10;827:20;;;;;;;;;;;;;;;;:30;;819:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;919:6;895:8;:20;904:10;895:20;;;;;;;;;;;;;;;;:30;;;;;;;:::i;:::-;;;;;;;;952:6;936:8;:12;945:2;936:12;;;;;;;;;;;;;;;;:22;;;;;;;:::i;:::-;;;;;;;;977:2;969:20;;:28;990:6;969:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1034:2;1013:32;;1022:10;1013:32;;;1038:6;1013:32;;;;;;:::i;:::-;;;;;;;;692:361;;:::o;369:209::-;434:1;422:9;:13;414:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;515:9;491:8;:20;500:10;491:20;;;;;;;;;;;;;;;;:33;;;;;;;:::i;:::-;;;;;;;;548:10;540:30;;;560:9;540:30;;;;;;:::i;:::-;;;;;;;;369:209::o;7:139:1:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:139::-;;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;204:87;;;;:::o;297:262::-;;405:2;393:9;384:7;380:23;376:32;373:2;;;421:1;418;411:12;373:2;464:1;489:53;534:7;525:6;514:9;510:22;489:53;:::i;:::-;479:63;;435:117;363:196;;;;:::o;565:407::-;;;690:2;678:9;669:7;665:23;661:32;658:2;;;706:1;703;696:12;658:2;749:1;774:53;819:7;810:6;799:9;795:22;774:53;:::i;:::-;764:63;;720:117;876:2;902:53;947:7;938:6;927:9;923:22;902:53;:::i;:::-;892:63;;847:118;648:324;;;;;:::o;978:262::-;;1086:2;1074:9;1065:7;1061:23;1057:32;1054:2;;;1102:1;1099;1092:12;1054:2;1145:1;1170:53;1215:7;1206:6;1195:9;1191:22;1170:53;:::i;:::-;1160:63;;1116:117;1044:196;;;;:::o;1246:313::-;;1409:67;1473:2;1468:3;1409:67;:::i;:::-;1402:74;;1506:17;1502:1;1497:3;1493:11;1486:38;1550:2;1545:3;1541:12;1534:19;;1392:167;;;:::o;1565:318::-;;1728:67;1792:2;1787:3;1728:67;:::i;:::-;1721:74;;1825:22;1821:1;1816:3;1812:11;1805:43;1874:2;1869:3;1865:12;1858:19;;1711:172;;;:::o;1889:372::-;;2052:67;2116:2;2111:3;2052:67;:::i;:::-;2045:74;;2149:34;2145:1;2140:3;2136:11;2129:55;2215:10;2210:2;2205:3;2201:12;2194:32;2252:2;2247:3;2243:12;2236:19;;2035:226;;;:::o;2267:375::-;;2430:67;2494:2;2489:3;2430:67;:::i;:::-;2423:74;;2527:34;2523:1;2518:3;2514:11;2507:55;2593:13;2588:2;2583:3;2579:12;2572:35;2633:2;2628:3;2624:12;2617:19;;2413:229;;;:::o;2648:118::-;2735:24;2753:5;2735:24;:::i;:::-;2730:3;2723:37;2713:53;;:::o;2772:419::-;;2976:2;2965:9;2961:18;2953:26;;3025:9;3019:4;3015:20;3011:1;3000:9;2996:17;2989:47;3053:131;3179:4;3053:131;:::i;:::-;3045:139;;2943:248;;;:::o;3197:419::-;;3401:2;3390:9;3386:18;3378:26;;3450:9;3444:4;3440:20;3436:1;3425:9;3421:17;3414:47;3478:131;3604:4;3478:131;:::i;:::-;3470:139;;3368:248;;;:::o;3622:419::-;;3826:2;3815:9;3811:18;3803:26;;3875:9;3869:4;3865:20;3861:1;3850:9;3846:17;3839:47;3903:131;4029:4;3903:131;:::i;:::-;3895:139;;3793:248;;;:::o;4047:419::-;;4251:2;4240:9;4236:18;4228:26;;4300:9;4294:4;4290:20;4286:1;4275:9;4271:17;4264:47;4328:131;4454:4;4328:131;:::i;:::-;4320:139;;4218:248;;;:::o;4472:222::-;;4603:2;4592:9;4588:18;4580:26;;4616:71;4684:1;4673:9;4669:17;4660:6;4616:71;:::i;:::-;4570:124;;;;:::o;4700:169::-;;4818:6;4813:3;4806:19;4858:4;4853:3;4849:14;4834:29;;4796:73;;;;:::o;4875:305::-;;4934:20;4952:1;4934:20;:::i;:::-;4929:25;;4968:20;4986:1;4968:20;:::i;:::-;4963:25;;5122:1;5054:66;5050:74;5047:1;5044:81;5041:2;;;5128:18;;:::i;:::-;5041:2;5172:1;5169;5165:9;5158:16;;4919:261;;;;:::o;5186:191::-;;5246:20;5264:1;5246:20;:::i;:::-;5241:25;;5280:20;5298:1;5280:20;:::i;:::-;5275:25;;5319:1;5316;5313:8;5310:2;;;5324:18;;:::i;:::-;5310:2;5369:1;5366;5362:9;5354:17;;5231:146;;;;:::o;5383:96::-;;5449:24;5467:5;5449:24;:::i;:::-;5438:35;;5428:51;;;:::o;5485:126::-;;5562:42;5555:5;5551:54;5540:65;;5530:81;;;:::o;5617:77::-;;5683:5;5672:16;;5662:32;;;:::o;5700:180::-;5748:77;5745:1;5738:88;5845:4;5842:1;5835:15;5869:4;5866:1;5859:15;5886:122;5959:24;5977:5;5959:24;:::i;:::-;5952:5;5949:35;5939:2;;5998:1;5995;5988:12;5939:2;5929:79;:::o;6014:122::-;6087:24;6105:5;6087:24;:::i;:::-;6080:5;6077:35;6067:2;;6126:1;6123;6116:12;6067:2;6057:79;:::o",
  "source": "// contracts/MusicWallet.sol\r\n// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract MusicWallet {\r\n    mapping(address => uint256) private balances;\r\n\r\n    event Deposit(address indexed user, uint256 amount);\r\n    event Transfer(address indexed from, address indexed to, uint256 amount);\r\n    event Withdraw(address indexed user, uint256 amount);\r\n\r\n    function deposit() public payable {\r\n        require(msg.value > 0, \"Deposit amount must be greater than zero\");\r\n        balances[msg.sender] += msg.value;\r\n        emit Deposit(msg.sender, msg.value);\r\n    }\r\n\r\n    function getBalance() public view returns (uint256) {\r\n        return balances[msg.sender];\r\n    }\r\n\r\n    function transfer(address to, uint256 amount) public payable {\r\n        require(to != address(0), \"Invalid address\");\r\n        require(balances[msg.sender] >= amount, \"Insufficient balance\");\r\n\r\n        balances[msg.sender] -= amount;\r\n        balances[to] += amount;\r\n        payable(to).transfer(amount);\r\n        emit Transfer(msg.sender, to, amount);\r\n    }\r\n\r\n    function withdraw(uint256 amount) public {\r\n        require(amount > 0, \"Withdrawal amount must be greater than zero\");\r\n        require(balances[msg.sender] >= amount, \"Insufficient balance\");\r\n\r\n        balances[msg.sender] -= amount;\r\n        payable(msg.sender).transfer(amount);\r\n        emit Withdraw(msg.sender, amount);\r\n    }\r\n\r\n    function balanceOf(address user) public view returns (uint256) {\r\n        return balances[user];\r\n    }\r\n}\r\n",
  "sourcePath": "E:\\DACN3\\smart_contract\\contracts\\MusicWallet.sol",
  "ast": {
    "absolutePath": "project:/contracts/MusicWallet.sol",
    "exportedSymbols": {
      "MusicWallet": [
        177
      ]
    },
    "id": 178,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "63:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 177,
        "linearizedBaseContracts": [
          177
        ],
        "name": "MusicWallet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "mutability": "mutable",
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 177,
            "src": "118:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 4,
              "keyType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "126:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "118:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 3,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "137:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "anonymous": false,
            "id": 11,
            "name": "Deposit",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "185:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "185:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11,
                  "src": "207:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "184:38:0"
            },
            "src": "171:52:0"
          },
          {
            "anonymous": false,
            "id": 19,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "244:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "244:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "266:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "286:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "243:58:0"
            },
            "src": "229:73:0"
          },
          {
            "anonymous": false,
            "id": 25,
            "name": "Withdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "323:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25,
                  "src": "345:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "345:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "322:38:0"
            },
            "src": "308:53:0"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "403:175:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 32,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 29,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "422:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 30,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "422:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 31,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "434:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "422:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4465706f73697420616d6f756e74206d7573742062652067726561746572207468616e207a65726f",
                        "id": 33,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "437:42:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71",
                          "typeString": "literal_string \"Deposit amount must be greater than zero\""
                        },
                        "value": "Deposit amount must be greater than zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71",
                          "typeString": "literal_string \"Deposit amount must be greater than zero\""
                        }
                      ],
                      "id": 28,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "414:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "414:66:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 35,
                  "nodeType": "ExpressionStatement",
                  "src": "414:66:0"
                },
                {
                  "expression": {
                    "id": 42,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 36,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "491:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 39,
                      "indexExpression": {
                        "expression": {
                          "id": 37,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "500:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "500:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "491:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "expression": {
                        "id": 40,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "515:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "515:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "491:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 43,
                  "nodeType": "ExpressionStatement",
                  "src": "491:33:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 45,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "548:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 46,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "548:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 47,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "560:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 48,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "560:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 44,
                      "name": "Deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "540:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "540:30:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50,
                  "nodeType": "EmitStatement",
                  "src": "535:35:0"
                }
              ]
            },
            "functionSelector": "d0e30db0",
            "id": 52,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "385:2:0"
            },
            "returnParameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "403:0:0"
            },
            "scope": 177,
            "src": "369:209:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 62,
              "nodeType": "Block",
              "src": "638:46:0",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 57,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "656:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 60,
                    "indexExpression": {
                      "expression": {
                        "id": 58,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "665:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 59,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "665:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "656:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56,
                  "id": 61,
                  "nodeType": "Return",
                  "src": "649:27:0"
                }
              ]
            },
            "functionSelector": "12065fe0",
            "id": 63,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "605:2:0"
            },
            "returnParameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 63,
                  "src": "629:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "629:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "628:9:0"
            },
            "scope": 177,
            "src": "586:98:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "753:300:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 76,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 71,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "772:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 74,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "786:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 73,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "778:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 72,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "778:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "778:10:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "772:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c69642061646472657373",
                        "id": 77,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "790:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226",
                          "typeString": "literal_string \"Invalid address\""
                        },
                        "value": "Invalid address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226",
                          "typeString": "literal_string \"Invalid address\""
                        }
                      ],
                      "id": 70,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "764:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 78,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "764:44:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 79,
                  "nodeType": "ExpressionStatement",
                  "src": "764:44:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 81,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "827:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 84,
                          "indexExpression": {
                            "expression": {
                              "id": 82,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "836:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 83,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "836:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "827:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 85,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 67,
                          "src": "851:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "827:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "859:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 80,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "819:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "819:63:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "819:63:0"
                },
                {
                  "expression": {
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 90,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "895:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 93,
                      "indexExpression": {
                        "expression": {
                          "id": 91,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "904:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 92,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "904:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "895:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 94,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67,
                      "src": "919:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "895:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "895:30:0"
                },
                {
                  "expression": {
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 97,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "936:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 99,
                      "indexExpression": {
                        "id": 98,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "945:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "936:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 100,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67,
                      "src": "952:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "936:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 102,
                  "nodeType": "ExpressionStatement",
                  "src": "936:22:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 108,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "990:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 105,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65,
                            "src": "977:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "969:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_payable_$",
                            "typeString": "type(address payable)"
                          },
                          "typeName": {
                            "id": 103,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "969:8:0",
                            "stateMutability": "payable",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "969:11:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "969:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "969:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110,
                  "nodeType": "ExpressionStatement",
                  "src": "969:28:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 112,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1022:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1022:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 114,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "1034:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 115,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "1038:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 111,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "1013:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1013:32:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "EmitStatement",
                  "src": "1008:37:0"
                }
              ]
            },
            "functionSelector": "a9059cbb",
            "id": 119,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "710:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 67,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "722:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "722:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "709:28:0"
            },
            "returnParameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "753:0:0"
            },
            "scope": 177,
            "src": "692:361:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 163,
              "nodeType": "Block",
              "src": "1102:293:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 125,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "1121:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1130:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1121:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5769746864726177616c20616d6f756e74206d7573742062652067726561746572207468616e207a65726f",
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1133:45:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76",
                          "typeString": "literal_string \"Withdrawal amount must be greater than zero\""
                        },
                        "value": "Withdrawal amount must be greater than zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e6dfdf6fd224a5113c49a29cf9b4b639f9376661adbb7661d7ed8506995ced76",
                          "typeString": "literal_string \"Withdrawal amount must be greater than zero\""
                        }
                      ],
                      "id": 124,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1113:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1113:66:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1113:66:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 137,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 132,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "1198:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 135,
                          "indexExpression": {
                            "expression": {
                              "id": 133,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1207:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1207:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1198:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 136,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "1222:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1198:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e73756666696369656e742062616c616e6365",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1230:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        },
                        "value": "Insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                          "typeString": "literal_string \"Insufficient balance\""
                        }
                      ],
                      "id": 131,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1190:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:63:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "1190:63:0"
                },
                {
                  "expression": {
                    "id": 146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 141,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1266:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 144,
                      "indexExpression": {
                        "expression": {
                          "id": 142,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1275:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 143,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1275:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1266:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 145,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121,
                      "src": "1290:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1266:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 147,
                  "nodeType": "ExpressionStatement",
                  "src": "1266:30:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 154,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1336:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 150,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1315:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1315:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1307:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_payable_$",
                            "typeString": "type(address payable)"
                          },
                          "typeName": {
                            "id": 148,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1307:8:0",
                            "stateMutability": "payable",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1307:19:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "src": "1307:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1307:36:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 156,
                  "nodeType": "ExpressionStatement",
                  "src": "1307:36:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 158,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1368:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1368:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 160,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1380:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 157,
                      "name": "Withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1359:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1359:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "EmitStatement",
                  "src": "1354:33:0"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 164,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "1079:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1079:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1078:16:0"
            },
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1102:0:0"
            },
            "scope": 177,
            "src": "1061:334:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 175,
              "nodeType": "Block",
              "src": "1466:40:0",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 171,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "1484:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 173,
                    "indexExpression": {
                      "id": 172,
                      "name": "user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 166,
                      "src": "1493:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1484:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 170,
                  "id": 174,
                  "nodeType": "Return",
                  "src": "1477:21:0"
                }
              ]
            },
            "functionSelector": "70a08231",
            "id": 176,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 166,
                  "mutability": "mutable",
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 176,
                  "src": "1422:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1421:14:0"
            },
            "returnParameters": {
              "id": 170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 169,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 176,
                  "src": "1457:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 168,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1457:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1456:9:0"
            },
            "scope": 177,
            "src": "1403:103:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 178,
        "src": "90:1419:0"
      }
    ],
    "src": "63:1448:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x2A121Db1CB7A2F06C042710066d8Dc774dDBA70F",
      "transactionHash": "0x2574b609c85b6ea94b7a51f697b1f6f4f9f93ae4c8d1003907eefd35c9783353"
    },
    "1715708112228": {
      "events": {},
      "links": {},
      "address": "0xD1F8339c50F243630197222fCe21b402B48d9EC3",
      "transactionHash": "0xb9085da4888b1e84902ec2cd02e2c32b4f5959515f1e9eb4b388301263c19e5a"
    },
    "1715710770553": {
      "events": {},
      "links": {},
      "address": "0x2838F3F568531A445Caf3bA869f7E52c0483F27A",
      "transactionHash": "0x8d578e73642625271ee92f253fa90692e819eab6406f29e5667c82d0d6b02e76"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2024-06-15T12:45:10.279Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}