// File: test/MusicWallet.test.js

const MusicWallet = artifacts.require("MusicWallet");

contract("MusicWallet", (accounts) => {
  let musicWalletInstance;

  beforeEach(async () => {
    musicWalletInstance = await MusicWallet.new({ from: accounts[0] });
  });

  it("should deposit ether into the contract", async () => {
    const initialBalance = await musicWalletInstance.getBalance();

    // Perform a deposit of 1 ether
    await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether"), from: accounts[0] });

    const newBalance = await musicWalletInstance.getBalance();

    assert.equal(newBalance - initialBalance, web3.utils.toWei("1", "ether"), "Deposit amount is not correct");
  });

  it("should withdraw ether from the contract", async () => {
    // Deposit 1 ether first
    await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether"), from: accounts[0] });

    const initialBalance = await musicWalletInstance.getBalance();

    // Withdraw 0.5 ether
    await musicWalletInstance.withdraw(web3.utils.toWei("0.5", "ether"), { from: accounts[0] });

    const newBalance = await musicWalletInstance.getBalance();

    assert.equal(initialBalance - newBalance, web3.utils.toWei("0.5", "ether"), "Withdraw amount is not correct");
  });

  it("should fail to withdraw more than the balance", async () => {
    // Deposit 1 ether first
    await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether"), from: accounts[0] });

    // Try to withdraw 2 ether, which should fail
    try {
      await musicWalletInstance.withdraw(web3.utils.toWei("2", "ether"), { from: accounts[0] });
      assert.fail("Withdrawal of more than balance should fail");
    } catch (error) {
      assert.include(error.message, "Insufficient balance", "Expected Insufficient balance error but got another error");
    }
  });

  it("should fail to withdraw zero ether", async () => {
    // Deposit 1 ether first
    await musicWalletInstance.deposit({ value: web3.utils.toWei("1", "ether"), from: accounts[0] });

    // Try to withdraw 0 ether, which should fail
    try {
      await musicWalletInstance.withdraw(web3.utils.toWei("0", "ether"), { from: accounts[0] });
      assert.fail("Withdrawal of zero amount should fail");
    } catch (error) {
      assert.include(error.message, "Withdrawal amount must be greater than zero", "Expected Withdrawal amount must be greater than zero error but got another error");
    }
  });
});
