require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL= 'https://eth-sepolia.g.alchemy.com/v2/ZxZv9CDoEu_u0lEzYjs9ofXdGJv7ziQj';
const PRIVATE_KEY = 'b85c1236714d54220fef8a2c153744d3b21f6c975d67a461bc2910dbfbeccfd9';
const ETHERSCAN_API_KEY = 'PAIMWE8QY89YRU3WWIPG2DJH121FMTPDN4';


module.exports = {
  solidity: "0.8.28",
  networks: {
    development: {
      url:"http://localhost:8545",
      chainId: 1337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY
    }
  }
};
