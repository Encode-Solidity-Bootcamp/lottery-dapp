import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
    optimizer: {
      enabled: true,
      runs: 200,
    },
  defaultNetwork: "goerli",
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [ PRIVATE_KEY],

    },
  },
};

export default config;