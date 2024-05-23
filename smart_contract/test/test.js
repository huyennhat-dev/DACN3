// File: test/MusicWallet.test.js

const MusicWallet = artifacts.require("MusicWallet");

contract("MusicWallet", (accounts) => {
  let musicWalletInstance;

  beforeEach(async () => {
    musicWalletInstance = await MusicWallet.new({ from: accounts[0] });
  });

  // it("should deposit ether into the contract", async () => {
  //   const initialBalance = await musicWalletInstance.getBalance();

  //   // Perform a deposit of 1 ether
  //   await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether") });

  //   const newBalance = await musicWalletInstance.getBalance();

  //   assert.equal(newBalance - initialBalance, web3.utils.toWei("1", "ether"), "Deposit amount is not correct");
  // });

  it("should transfer ether to another address", async () => {
    // Deposit ether into the contract
    await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether") });

    const recipientAddress = accounts[1];
    const amountToSend = web3.utils.toWei("0.5", "ether");

    // Perform a transfer
    await musicWalletInstance.transfer(recipientAddress, amountToSend);

    // Check recipient's balance
    const recipientBalance = await web3.eth.getBalance(recipientAddress);

    assert.equal(recipientBalance, amountToSend, "Recipient did not receive the correct amount of ether");
  });
});
