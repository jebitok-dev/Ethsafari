require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { RPC_ENDPOINT, PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: RPC_ENDPOINT || "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  }
};
