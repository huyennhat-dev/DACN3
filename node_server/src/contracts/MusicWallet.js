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
    "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MusicWallet.sol\":\"MusicWallet\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/MusicWallet.sol\":{\"keccak256\":\"0x4b9ebd0f8046677b0fb5e5b2349a4d8ddb818c416399a170ec450a94c768dd81\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a1b91a7d181d6a07e25d170896e646182187f10644ea7ad41b3e64307c7c4d4\",\"dweb:/ipfs/QmUJhdGm9v3i2iiAoRTupWUBFSLBcSDMu4VpARQ4kCcYyv\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b506107fc806100206000396000f3fe60806040526004361061003f5760003560e01c806312065fe01461004457806370a082311461006f578063a9059cbb146100ac578063d0e30db0146100c8575b600080fd5b34801561005057600080fd5b506100596100d2565b6040516100669190610677565b60405180910390f35b34801561007b57600080fd5b50610096600480360381019061009191906104bd565b610118565b6040516100a39190610677565b60405180910390f35b6100c660048036038101906100c191906104e6565b610160565b005b6100d06103ab565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156101d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c790610617565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024890610637565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461029f91906106f9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102f491906106a3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610341573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161039f9190610677565b60405180910390a35050565b600034116103ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e590610657565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043c91906106a3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040516104899190610677565b60405180910390a2565b6000813590506104a281610798565b92915050565b6000813590506104b7816107af565b92915050565b6000602082840312156104cf57600080fd5b60006104dd84828501610493565b91505092915050565b600080604083850312156104f957600080fd5b600061050785828601610493565b9250506020610518858286016104a8565b9150509250929050565b600061052f600f83610692565b91507f496e76616c6964206164647265737300000000000000000000000000000000006000830152602082019050919050565b600061056f601483610692565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b60006105af602883610692565b91507f4465706f73697420616d6f756e74206d7573742062652067726561746572207460008301527f68616e207a65726f0000000000000000000000000000000000000000000000006020830152604082019050919050565b6106118161075f565b82525050565b6000602082019050818103600083015261063081610522565b9050919050565b6000602082019050818103600083015261065081610562565b9050919050565b60006020820190508181036000830152610670816105a2565b9050919050565b600060208201905061068c6000830184610608565b92915050565b600082825260208201905092915050565b60006106ae8261075f565b91506106b98361075f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106ee576106ed610769565b5b828201905092915050565b60006107048261075f565b915061070f8361075f565b92508282101561072257610721610769565b5b828203905092915050565b60006107388261073f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6107a18161072d565b81146107ac57600080fd5b50565b6107b88161075f565b81146107c357600080fd5b5056fea26469706673582212208e696369505be34634c6eefb80a69077c5fb5b353da4aa9ebc0c7f942051ddf264736f6c63430008000033",
    "deployedBytecode": "0x60806040526004361061003f5760003560e01c806312065fe01461004457806370a082311461006f578063a9059cbb146100ac578063d0e30db0146100c8575b600080fd5b34801561005057600080fd5b506100596100d2565b6040516100669190610677565b60405180910390f35b34801561007b57600080fd5b50610096600480360381019061009191906104bd565b610118565b6040516100a39190610677565b60405180910390f35b6100c660048036038101906100c191906104e6565b610160565b005b6100d06103ab565b005b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156101d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c790610617565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024890610637565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461029f91906106f9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102f491906106a3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610341573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161039f9190610677565b60405180910390a35050565b600034116103ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e590610657565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043c91906106a3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040516104899190610677565b60405180910390a2565b6000813590506104a281610798565b92915050565b6000813590506104b7816107af565b92915050565b6000602082840312156104cf57600080fd5b60006104dd84828501610493565b91505092915050565b600080604083850312156104f957600080fd5b600061050785828601610493565b9250506020610518858286016104a8565b9150509250929050565b600061052f600f83610692565b91507f496e76616c6964206164647265737300000000000000000000000000000000006000830152602082019050919050565b600061056f601483610692565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b60006105af602883610692565b91507f4465706f73697420616d6f756e74206d7573742062652067726561746572207460008301527f68616e207a65726f0000000000000000000000000000000000000000000000006020830152604082019050919050565b6106118161075f565b82525050565b6000602082019050818103600083015261063081610522565b9050919050565b6000602082019050818103600083015261065081610562565b9050919050565b60006020820190508181036000830152610670816105a2565b9050919050565b600060208201905061068c6000830184610608565b92915050565b600082825260208201905092915050565b60006106ae8261075f565b91506106b98361075f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156106ee576106ed610769565b5b828201905092915050565b60006107048261075f565b915061070f8361075f565b92508282101561072257610721610769565b5b828203905092915050565b60006107388261073f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6107a18161072d565b81146107ac57600080fd5b50565b6107b88161075f565b81146107c357600080fd5b5056fea26469706673582212208e696369505be34634c6eefb80a69077c5fb5b353da4aa9ebc0c7f942051ddf264736f6c63430008000033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5065:1",
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
                "src": "1124:167:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1134:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1200:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1205:2:1",
                          "type": "",
                          "value": "15"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1141:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1141:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1134:3:1"
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
                              "src": "1229:3:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1234:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1225:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1225:11:1"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1238:17:1",
                          "type": "",
                          "value": "Invalid address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1218:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1218:38:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1218:38:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1266:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1277:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1282:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1273:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1273:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1266:3:1"
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
                  "src": "1112:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1120:3:1",
                  "type": ""
                }
              ],
              "src": "978:313:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1443:172:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1453:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1519:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1524:2:1",
                          "type": "",
                          "value": "20"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1460:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1460:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1453:3:1"
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
                              "src": "1548:3:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1553:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1544:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1544:11:1"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1557:22:1",
                          "type": "",
                          "value": "Insufficient balance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1537:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1537:43:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1537:43:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1590:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1601:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1606:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1597:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1597:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1590:3:1"
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
                  "src": "1431:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1439:3:1",
                  "type": ""
                }
              ],
              "src": "1297:318:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1767:226:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1777:74:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1843:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1848:2:1",
                          "type": "",
                          "value": "40"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1784:58:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1784:67:1"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1777:3:1"
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
                              "src": "1872:3:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1877:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1868:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1868:11:1"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1881:34:1",
                          "type": "",
                          "value": "Deposit amount must be greater t"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1861:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1861:55:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1861:55:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1937:3:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1942:2:1",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1933:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1933:12:1"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1947:10:1",
                          "type": "",
                          "value": "han zero"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1926:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1926:32:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1926:32:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1968:19:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1979:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1984:2:1",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1975:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1975:12:1"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1968:3:1"
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
                  "src": "1755:3:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1763:3:1",
                  "type": ""
                }
              ],
              "src": "1621:372:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2064:53:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2081:3:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2104:5:1"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2086:17:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2086:24:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2074:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2074:37:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2074:37:1"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2052:5:1",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2059:3:1",
                  "type": ""
                }
              ],
              "src": "1999:118:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2294:248:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2304:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2316:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2327:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2312:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2312:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2304:4:1"
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
                              "src": "2351:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2362:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2347:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2347:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2370:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2376:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2366:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2366:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2340:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2340:47:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2340:47:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2396:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2530:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2404:124:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2404:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2396:4:1"
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
                  "src": "2274:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2289:4:1",
                  "type": ""
                }
              ],
              "src": "2123:419:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2719:248:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2729:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2741:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2752:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2737:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2737:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2729:4:1"
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
                              "src": "2776:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2787:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2772:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2772:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2795:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2801:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2791:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2791:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2765:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2765:47:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2765:47:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2821:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2955:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2829:124:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2829:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2821:4:1"
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
                  "src": "2699:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2714:4:1",
                  "type": ""
                }
              ],
              "src": "2548:419:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3144:248:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3154:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3166:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3177:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3162:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3162:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3154:4:1"
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
                              "src": "3201:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3212:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3197:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3197:17:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "3220:4:1"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3226:9:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3216:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3216:20:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3190:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3190:47:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3190:47:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3246:139:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3380:4:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3254:124:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3254:131:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3246:4:1"
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
                  "src": "3124:9:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3139:4:1",
                  "type": ""
                }
              ],
              "src": "2973:419:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3496:124:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3506:26:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3518:9:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3529:2:1",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3514:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3514:18:1"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3506:4:1"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3586:6:1"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3599:9:1"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3610:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3595:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3595:17:1"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3542:43:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3542:71:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3542:71:1"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3468:9:1",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3480:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3491:4:1",
                  "type": ""
                }
              ],
              "src": "3398:222:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3722:73:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3739:3:1"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3744:6:1"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3732:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3732:19:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3732:19:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3760:29:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3779:3:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3784:4:1",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3775:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3775:14:1"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "3760:11:1"
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
                  "src": "3694:3:1",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3699:6:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "3710:11:1",
                  "type": ""
                }
              ],
              "src": "3626:169:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3845:261:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3855:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "3878:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3860:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3860:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3855:1:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3889:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "3912:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3894:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3894:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3889:1:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4052:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4054:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4054:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4054:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "3973:1:1"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3980:66:1",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4048:1:1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3976:3:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3976:74:1"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3970:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3970:81:1"
                    },
                    "nodeType": "YulIf",
                    "src": "3967:2:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4084:16:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4095:1:1"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4098:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4091:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4091:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "4084:3:1"
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
                  "src": "3832:1:1",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "3835:1:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "3841:3:1",
                  "type": ""
                }
              ],
              "src": "3801:305:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4157:146:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4167:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4190:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4172:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4172:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4167:1:1"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4201:25:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4224:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4206:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4206:20:1"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4201:1:1"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4248:22:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4250:16:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4250:18:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4250:18:1"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4242:1:1"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4245:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "4239:2:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4239:8:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4236:2:1"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4280:17:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4292:1:1"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4295:1:1"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "4288:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4288:9:1"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "4280:4:1"
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
                  "src": "4143:1:1",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "4146:1:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "4152:4:1",
                  "type": ""
                }
              ],
              "src": "4112:191:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4354:51:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4364:35:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4393:5:1"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "4375:17:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4375:24:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4364:7:1"
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
                  "src": "4336:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4346:7:1",
                  "type": ""
                }
              ],
              "src": "4309:96:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4456:81:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4466:65:1",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4481:5:1"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4488:42:1",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "4477:3:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4477:54:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4466:7:1"
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
                  "src": "4438:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4448:7:1",
                  "type": ""
                }
              ],
              "src": "4411:126:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4588:32:1",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4598:16:1",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4609:5:1"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "4598:7:1"
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
                  "src": "4570:5:1",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "4580:7:1",
                  "type": ""
                }
              ],
              "src": "4543:77:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4654:152:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4671:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4674:77:1",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4664:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4664:88:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4664:88:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4768:1:1",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4771:4:1",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4761:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4761:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4761:15:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4792:1:1",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4795:4:1",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "4785:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4785:15:1"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4785:15:1"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "4626:180:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4855:79:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4912:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4921:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4924:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4914:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4914:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4914:12:1"
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
                              "src": "4878:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4903:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4885:17:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4885:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "4875:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4875:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4868:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4868:43:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4865:2:1"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4848:5:1",
                  "type": ""
                }
              ],
              "src": "4812:122:1"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4983:79:1",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5040:16:1",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5049:1:1",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5052:1:1",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5042:6:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5042:12:1"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5042:12:1"
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
                              "src": "5006:5:1"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "5031:5:1"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5013:17:1"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5013:24:1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5003:2:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5003:35:1"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4996:6:1"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4996:43:1"
                    },
                    "nodeType": "YulIf",
                    "src": "4993:2:1"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4976:5:1",
                  "type": ""
                }
              ],
              "src": "4940:122:1"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 15)\n\n        mstore(add(pos, 0), \"Invalid address\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n\n        mstore(add(pos, 0), \"Insufficient balance\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 40)\n\n        mstore(add(pos, 0), \"Deposit amount must be greater t\")\n\n        mstore(add(pos, 32), \"han zero\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1462473b7a4b33d32b109b815fd2324d00c9e5839b707ecf16d0ab5744f99226_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_db6be16441e34ea48fe8874b96e95d582ae0bd410efda730a60e59285507cd71_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 1,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "90:1018:0:-:0;;;;;;;;;;;;;;;;;;;",
    "deployedSourceMap": "90:1018:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;527:98;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1002:103;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;633:361;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;310:209;;;:::i;:::-;;527:98;570:7;597:8;:20;606:10;597:20;;;;;;;;;;;;;;;;590:27;;527:98;:::o;1002:103::-;1056:7;1083:8;:14;1092:4;1083:14;;;;;;;;;;;;;;;;1076:21;;1002:103;;;:::o;633:361::-;727:1;713:16;;:2;:16;;;;705:44;;;;;;;;;;;;:::i;:::-;;;;;;;;;792:6;768:8;:20;777:10;768:20;;;;;;;;;;;;;;;;:30;;760:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;860:6;836:8;:20;845:10;836:20;;;;;;;;;;;;;;;;:30;;;;;;;:::i;:::-;;;;;;;;893:6;877:8;:12;886:2;877:12;;;;;;;;;;;;;;;;:22;;;;;;;:::i;:::-;;;;;;;;918:2;910:20;;:28;931:6;910:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;975:2;954:32;;963:10;954:32;;;979:6;954:32;;;;;;:::i;:::-;;;;;;;;633:361;;:::o;310:209::-;375:1;363:9;:13;355:66;;;;;;;;;;;;:::i;:::-;;;;;;;;;456:9;432:8;:20;441:10;432:20;;;;;;;;;;;;;;;;:33;;;;;;;:::i;:::-;;;;;;;;489:10;481:30;;;501:9;481:30;;;;;;:::i;:::-;;;;;;;;310:209::o;7:139:1:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:139::-;;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;204:87;;;;:::o;297:262::-;;405:2;393:9;384:7;380:23;376:32;373:2;;;421:1;418;411:12;373:2;464:1;489:53;534:7;525:6;514:9;510:22;489:53;:::i;:::-;479:63;;435:117;363:196;;;;:::o;565:407::-;;;690:2;678:9;669:7;665:23;661:32;658:2;;;706:1;703;696:12;658:2;749:1;774:53;819:7;810:6;799:9;795:22;774:53;:::i;:::-;764:63;;720:117;876:2;902:53;947:7;938:6;927:9;923:22;902:53;:::i;:::-;892:63;;847:118;648:324;;;;;:::o;978:313::-;;1141:67;1205:2;1200:3;1141:67;:::i;:::-;1134:74;;1238:17;1234:1;1229:3;1225:11;1218:38;1282:2;1277:3;1273:12;1266:19;;1124:167;;;:::o;1297:318::-;;1460:67;1524:2;1519:3;1460:67;:::i;:::-;1453:74;;1557:22;1553:1;1548:3;1544:11;1537:43;1606:2;1601:3;1597:12;1590:19;;1443:172;;;:::o;1621:372::-;;1784:67;1848:2;1843:3;1784:67;:::i;:::-;1777:74;;1881:34;1877:1;1872:3;1868:11;1861:55;1947:10;1942:2;1937:3;1933:12;1926:32;1984:2;1979:3;1975:12;1968:19;;1767:226;;;:::o;1999:118::-;2086:24;2104:5;2086:24;:::i;:::-;2081:3;2074:37;2064:53;;:::o;2123:419::-;;2327:2;2316:9;2312:18;2304:26;;2376:9;2370:4;2366:20;2362:1;2351:9;2347:17;2340:47;2404:131;2530:4;2404:131;:::i;:::-;2396:139;;2294:248;;;:::o;2548:419::-;;2752:2;2741:9;2737:18;2729:26;;2801:9;2795:4;2791:20;2787:1;2776:9;2772:17;2765:47;2829:131;2955:4;2829:131;:::i;:::-;2821:139;;2719:248;;;:::o;2973:419::-;;3177:2;3166:9;3162:18;3154:26;;3226:9;3220:4;3216:20;3212:1;3201:9;3197:17;3190:47;3254:131;3380:4;3254:131;:::i;:::-;3246:139;;3144:248;;;:::o;3398:222::-;;3529:2;3518:9;3514:18;3506:26;;3542:71;3610:1;3599:9;3595:17;3586:6;3542:71;:::i;:::-;3496:124;;;;:::o;3626:169::-;;3744:6;3739:3;3732:19;3784:4;3779:3;3775:14;3760:29;;3722:73;;;;:::o;3801:305::-;;3860:20;3878:1;3860:20;:::i;:::-;3855:25;;3894:20;3912:1;3894:20;:::i;:::-;3889:25;;4048:1;3980:66;3976:74;3973:1;3970:81;3967:2;;;4054:18;;:::i;:::-;3967:2;4098:1;4095;4091:9;4084:16;;3845:261;;;;:::o;4112:191::-;;4172:20;4190:1;4172:20;:::i;:::-;4167:25;;4206:20;4224:1;4206:20;:::i;:::-;4201:25;;4245:1;4242;4239:8;4236:2;;;4250:18;;:::i;:::-;4236:2;4295:1;4292;4288:9;4280:17;;4157:146;;;;:::o;4309:96::-;;4375:24;4393:5;4375:24;:::i;:::-;4364:35;;4354:51;;;:::o;4411:126::-;;4488:42;4481:5;4477:54;4466:65;;4456:81;;;:::o;4543:77::-;;4609:5;4598:16;;4588:32;;;:::o;4626:180::-;4674:77;4671:1;4664:88;4771:4;4768:1;4761:15;4795:4;4792:1;4785:15;4812:122;4885:24;4903:5;4885:24;:::i;:::-;4878:5;4875:35;4865:2;;4924:1;4921;4914:12;4865:2;4855:79;:::o;4940:122::-;5013:24;5031:5;5013:24;:::i;:::-;5006:5;5003:35;4993:2;;5052:1;5049;5042:12;4993:2;4983:79;:::o",
    "source": "// contracts/MusicWallet.sol\r\n// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract MusicWallet {\r\n    mapping(address => uint256) private balances;\r\n\r\n    event Deposit(address indexed user, uint256 amount);\r\n    event Transfer(address indexed from, address indexed to, uint256 amount);\r\n\r\n    function deposit() public payable {\r\n        require(msg.value > 0, \"Deposit amount must be greater than zero\");\r\n        balances[msg.sender] += msg.value;\r\n        emit Deposit(msg.sender, msg.value);\r\n    }\r\n\r\n    function getBalance() public view returns (uint256) {\r\n        return balances[msg.sender];\r\n    }\r\n\r\n    function transfer(address to, uint256 amount) public payable {\r\n        require(to != address(0), \"Invalid address\");\r\n        require(balances[msg.sender] >= amount, \"Insufficient balance\");\r\n\r\n        balances[msg.sender] -= amount;\r\n        balances[to] += amount;\r\n        payable(to).transfer(amount);\r\n        emit Transfer(msg.sender, to, amount);\r\n    }\r\n\r\n    function balanceOf(address user) public view returns (uint256) {\r\n        return balances[user];\r\n    }\r\n}\r\n",
    "sourcePath": "E:\\DACN3\\smart_contract\\contracts\\MusicWallet.sol",
    "ast": {
      "absolutePath": "project:/contracts/MusicWallet.sol",
      "exportedSymbols": {
        "MusicWallet": [
          126
        ]
      },
      "id": 127,
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
          "id": 126,
          "linearizedBaseContracts": [
            126
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
              "scope": 126,
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
              "body": {
                "id": 45,
                "nodeType": "Block",
                "src": "344:175:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 23,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "363:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 24,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "363:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 25,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "375:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "363:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4465706f73697420616d6f756e74206d7573742062652067726561746572207468616e207a65726f",
                          "id": 27,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "378:42:0",
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
                        "id": 22,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "355:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 28,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "355:66:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 29,
                    "nodeType": "ExpressionStatement",
                    "src": "355:66:0"
                  },
                  {
                    "expression": {
                      "id": 36,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 30,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "432:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 33,
                        "indexExpression": {
                          "expression": {
                            "id": 31,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "441:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 32,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "441:10:0",
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
                        "src": "432:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "expression": {
                          "id": 34,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "456:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 35,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "456:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "432:33:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 37,
                    "nodeType": "ExpressionStatement",
                    "src": "432:33:0"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 39,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "489:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 40,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "489:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 41,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "501:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "501:9:0",
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
                        "id": 38,
                        "name": "Deposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "481:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 43,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "481:30:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 44,
                    "nodeType": "EmitStatement",
                    "src": "476:35:0"
                  }
                ]
              },
              "functionSelector": "d0e30db0",
              "id": 46,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "deposit",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 20,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "326:2:0"
              },
              "returnParameters": {
                "id": 21,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "344:0:0"
              },
              "scope": 126,
              "src": "310:209:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 56,
                "nodeType": "Block",
                "src": "579:46:0",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 51,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "597:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 54,
                      "indexExpression": {
                        "expression": {
                          "id": 52,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "606:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 53,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "606:10:0",
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
                      "src": "597:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 50,
                    "id": 55,
                    "nodeType": "Return",
                    "src": "590:27:0"
                  }
                ]
              },
              "functionSelector": "12065fe0",
              "id": 57,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "getBalance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "546:2:0"
              },
              "returnParameters": {
                "id": 50,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 57,
                    "src": "570:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 48,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "570:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "569:9:0"
              },
              "scope": 126,
              "src": "527:98:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 112,
                "nodeType": "Block",
                "src": "694:300:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 70,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 65,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59,
                            "src": "713:2:0",
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
                                "id": 68,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "727:1:0",
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
                              "id": 67,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "719:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 66,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "719:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 69,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "719:10:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "713:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e76616c69642061646472657373",
                          "id": 71,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "731:17:0",
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
                        "id": 64,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "705:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 72,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "705:44:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 73,
                    "nodeType": "ExpressionStatement",
                    "src": "705:44:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 80,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 75,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5,
                              "src": "768:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 78,
                            "indexExpression": {
                              "expression": {
                                "id": 76,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "777:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 77,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "777:10:0",
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
                            "src": "768:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 79,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "792:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "768:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e73756666696369656e742062616c616e6365",
                          "id": 81,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "800:22:0",
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
                        "id": 74,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "760:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "760:63:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 83,
                    "nodeType": "ExpressionStatement",
                    "src": "760:63:0"
                  },
                  {
                    "expression": {
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 84,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "836:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 87,
                        "indexExpression": {
                          "expression": {
                            "id": 85,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "845:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 86,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "845:10:0",
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
                        "src": "836:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "-=",
                      "rightHandSide": {
                        "id": 88,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "860:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "836:30:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 90,
                    "nodeType": "ExpressionStatement",
                    "src": "836:30:0"
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
                          "id": 91,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "877:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 93,
                        "indexExpression": {
                          "id": 92,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "886:2:0",
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
                        "src": "877:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "id": 94,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "893:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "877:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 96,
                    "nodeType": "ExpressionStatement",
                    "src": "877:22:0"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 102,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "931:6:0",
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
                              "id": 99,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59,
                              "src": "918:2:0",
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
                            "id": 98,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "910:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 97,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "910:8:0",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "910:11:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "src": "910:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "910:28:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 104,
                    "nodeType": "ExpressionStatement",
                    "src": "910:28:0"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 106,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "963:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "963:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 108,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "975:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 109,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61,
                          "src": "979:6:0",
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
                        "id": 105,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19,
                        "src": "954:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "954:32:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 111,
                    "nodeType": "EmitStatement",
                    "src": "949:37:0"
                  }
                ]
              },
              "functionSelector": "a9059cbb",
              "id": 113,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 62,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 59,
                    "mutability": "mutable",
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 113,
                    "src": "651:10:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 58,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "651:7:0",
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
                    "id": 61,
                    "mutability": "mutable",
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "scope": 113,
                    "src": "663:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 60,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "663:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "650:28:0"
              },
              "returnParameters": {
                "id": 63,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "694:0:0"
              },
              "scope": 126,
              "src": "633:361:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 124,
                "nodeType": "Block",
                "src": "1065:40:0",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 120,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1083:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 122,
                      "indexExpression": {
                        "id": 121,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1092:4:0",
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
                      "src": "1083:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 119,
                    "id": 123,
                    "nodeType": "Return",
                    "src": "1076:21:0"
                  }
                ]
              },
              "functionSelector": "70a08231",
              "id": 125,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 116,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 115,
                    "mutability": "mutable",
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "scope": 125,
                    "src": "1021:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 114,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1021:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1020:14:0"
              },
              "returnParameters": {
                "id": 119,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 118,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 125,
                    "src": "1056:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 117,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1056:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1055:9:0"
              },
              "scope": 126,
              "src": "1002:103:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 127,
          "src": "90:1018:0"
        }
      ],
      "src": "63:1047:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x820aF539D55A2C40f951A0bA379F3D709B5B6fd8",
        "transactionHash": "0xa30ba28f2df5a286b3fabe6add654a9a2365a897a27dd93399a129be260bb7d4"
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
    "updatedAt": "2024-05-20T12:43:17.809Z",
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