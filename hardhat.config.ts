import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000,
      },
    },
  },
  networks: {
    // Add your network configurations here
  },
  paths: {
    sources: "./core",
  },
  etherscan: {
    apiKey: "<your_ether_scan_api_key>", // Add Etherscan API key here
  },
};

export default config;
