import Web3 from "web3";

import {MusicWalletJson} from './MusicWallet'
import env from "~/config/env";

const contractUrl = "http://127.0.0.1:7545";

const web3 = new Web3(contractUrl);
const MusicWallet = new web3.eth.Contract(MusicWalletJson.abi, env.CONTRACT_ADDRESS);
export { MusicWallet, web3 };
