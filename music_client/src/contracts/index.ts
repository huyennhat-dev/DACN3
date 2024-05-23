import Web3 from "web3";
import { env } from "../configs/env";

export const web3 = new Web3(env.mainnet || Web3.givenProvider);
