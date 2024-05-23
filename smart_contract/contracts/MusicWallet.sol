// contracts/MusicWallet.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MusicWallet {
    mapping(address => uint256) private balances;

    event Deposit(address indexed user, uint256 amount);
    event Transfer(address indexed from, address indexed to, uint256 amount);

    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    function transfer(address to, uint256 amount) public payable {
        require(to != address(0), "Invalid address");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;
        payable(to).transfer(amount);
        emit Transfer(msg.sender, to, amount);
    }

    function balanceOf(address user) public view returns (uint256) {
        return balances[user];
    }
}
