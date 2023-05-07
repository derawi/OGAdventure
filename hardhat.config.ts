import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";

dotenv.config();

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

  // Networks
  networks: {
    hardhat: {
      forking: {
        url: "https://json-rpc.evm.testnet.shimmer.network/",
      },
    },

    // The default RPC is an archive node -> this will allow forking
    "shimmer-testnet": {
      url: "https://json-rpc.evm.testnet.shimmer.network/",

      // The private key of the hardhat default account 0
      // This key is widely known, thats why you will find it in plaintext here
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        process.env.PRIVATE_KEY_RARITY_DEPLOYER as string,
      ],
    },
  },

  // Build paths
  paths: {
    sources: "./core",
  },
};

export default config;
