import Web3 from "web3";
import { HttpProvider } from "web3-core";

let provider: HttpProvider | undefined;
export const getProvider = () => {
  if (!provider || (provider && !provider.connected)) {
    provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545");
  }
  return provider;
};
