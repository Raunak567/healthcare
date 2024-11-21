# Healthcare DApp on Arbitrum

This is a decentralized healthcare application (DApp) built on the Arbitrum blockchain. It allows users to manage healthcare records in a secure and transparent manner, leveraging the benefits of blockchain technology. The app integrates with a smart contract to store and manage patient data, including medical records, diagnosis, treatment, and authorization of healthcare providers.

## Features

* Healthcare Record Management: Store and fetch patient records, including diagnosis and treatment details.
* Provider Authorization: The contract owner can authorize healthcare providers to manage patient records.
* Blockchain Security: All healthcare records are stored on the blockchain, ensuring data integrity and transparency.
* Arbitrum Integration: The application uses Arbitrum to provide fast and low-cost transactions compared to the Ethereum mainnet.

## Prerequisites

Before running this DApp, make sure you have the following:

* Metamask Wallet: A Metamask wallet set up and connected to the Arbitrum network.

* Node.js: A version of Node.js installed on your system. (Recommended: Node.js 16.x or later)

### Arbitrum Network Setup: Make sure your Metamask wallet is connected to the Arbitrum network. 
#### You can add Arbitrum to Metamask using the following settings:
* Network Name: ```Arbitrum Sepolia```
* RPC URL: ```sepolia-rollup.arbitrum.io/rpc```
* Chain ID: ```421614```
* Currency Symbol: ```ETH```
* Block Explorer URL: ```sepolia.arbiscan.io```

## Acquiring $ASPL on Arbitrum
To acquire $ASPL for testing on the Arbitrum network, you can follow these steps:

1.Acquire $ETH on L1 Sepolia:

Use a faucet to get Sepolia $ETH on the Ethereum Sepolia Testnet. You can use the Sepolia Faucet to acquire testnet $ETH on Ethereum's L1 [Sepolia network](https://cloud.google.com/application/web3/faucet/ethereum/sepolia).
2.Bridge $ETH from L1 Sepolia to Arbitrum L2:

After acquiring the Sepolia $ETH on L1, use the Arbitrum Bridge to move your $ETH from Ethereum’s L1 Sepolia network to Arbitrum's L2 Sepolia network.
Visit the [Arbitrum Bridge](https://bridge.arbitrum.io/) to complete the bridging process.

Once your $ETH is bridged to Arbitrum and your Metamask is configured, you can interact with the DApp on the Arbitrum network.

## Installation
1. Clone the repository:
```
git clone https://github.com/Raunak567/healthcare.git
cd healthcare
```
2. Install dependencies:
```
yarn add hardhat @nomicfoundation/hardhat-toolbox -D
```
3. Set up your contract:

Update the contractAddress in the code with the deployed contract address on Arbitrum. Ensure the contract has been deployed to Arbitrum One.
4. Deploy the contract (if not already deployed):

If you haven't deployed the contract yet, you can use Hardhat to deploy it to the Arbitrum network:
bash
Copy code
npx hardhat run scripts/deploy.js --network arbitrum
Start the frontend:

bash
Copy code
npm run start
This will start a local development server, typically accessible at http://localhost:3000.
