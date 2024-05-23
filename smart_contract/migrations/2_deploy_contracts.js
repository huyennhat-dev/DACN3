// migrations/2_deploy_music_wallet.js
const MusicWallet = artifacts.require("MusicWallet");

module.exports = function (deployer) {
  deployer.deploy(MusicWallet);
};
