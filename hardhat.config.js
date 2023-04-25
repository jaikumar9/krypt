// https://polygon-mumbai.g.alchemy.com/v2/gv1CYenQICudcEBRyf5b8198a1zIPGme


/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

// require("@nomilabs/hardhat/-waffle");

// const { deployContract } = require('@nomilabs/hardhat-waffle');
 
module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon_Testnet_Mumbai:{
      url: "https://polygon-mumbai.g.alchemy.com/v2/gv1CYenQICudcEBRyf5b8198a1zIPGme",
      accounts: ["fe0224fbb0d932dd70c84316d485911b7f82c6f19e85c359e1b3cd84ae3d2567"]
    }
  }
};

// 0x99CDDd0178fA1Feca4B6DA3C8878F65c3291667A

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };