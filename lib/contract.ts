import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { getWeb3 } from "./eth";
import { HttpProvider as Web3HttpProvider } from "web3-providers-http";

let web3: Web3 | undefined;
let contract: Contract | undefined;
export const getContract = (abi: any, contractAddress: string) => {
  if (!contract || (web3 && !(web3.eth.currentProvider as Web3HttpProvider).connected)) {
    web3 = getWeb3();
    contract = new web3.eth.Contract(abi, contractAddress);
  }

  return contract;
};
