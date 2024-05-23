// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Port mặc định của Ganache
      network_id: "*", // Kết nối với bất kỳ mạng nào
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Phiên bản Solidity
    },
  },
};
