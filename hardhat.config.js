require('@nomicfoundation/hardhat-toolbox');

// Enter Your Wallet Private Key Here:
const SEPOLIA_TESTNET_PRIVATE_KEY = '';


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.27',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: [SEPOLIA_TESTNET_PRIVATE_KEY]
    },
  },
};
