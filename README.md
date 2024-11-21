<h1 align="center"> Healthcare DApp on Arbitrum </h1>

<h3 align="center"> Live application of my project: https://healthcare-dapp.netlify.app/ </h3>

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

* Update the contractAddress in the code with the deployed contract address on Arbitrum.

4. Deploy the contract (if not already deployed):

If you haven't deployed the contract yet, you can use Hardhat to deploy it to the Arbitrum network:
```
yarn hardhat run scripts/deploy.js --network arbitrumSepolia
```
#### Replace the deployed contract address in Healthcare.js on line 18.

Also, you need to change the ```hardhat.config.js``` file to enter your private key.
```
const SEPOLIA_TESTNET_PRIVATE_KEY = '';
```

* NOTE: Since I have already deployed this smart contract, you don't need to deploy it again. Here is the link to my deployed smart contract on the [Arbitrum Sepolia testnet](https://sepolia.arbiscan.io/address/0x9adBa728D920e8A6295C73CC55510401Da2A05E7).

5. Start the frontend:
```
npm run start
```
### This will start a local development server, typically accessible at ```http://localhost:3000.```

## Usage

1. Connect your wallet:

* Make sure your Metamask wallet is connected to the Arbitrum network.
* Click on the "Connect Wallet" button to link your wallet to the application.
* View and Add Patient Records:

2. Use the input forms to enter a patientID, diagnosis, and treatment.
* Click "Add Record" to add a new record to the blockchain.
* Use the "Fetch Records" button to retrieve and display patient records.

3. Authorize Healthcare Providers:

* As the contract owner, you can authorize healthcare providers by entering their wallet address and clicking the "Authorize Provider" button.
## Smart Contract Functions
* ```addRecord(patientID, patientName, diagnosis, treatment)```: Adds a new patient record to the blockchain.
* ```getPatientRecords(patientID)```: Retrieves the list of records for a given patient ID.
* ```authorizeProvider(provider)```: Authorizes a healthcare provider to manage records.
* ```getOwner()```: Returns the address of the contract owner.

### Contract Deployment
The contract has been deployed to the Arbitrum network. The smart contract address is:

Contract Address: 0x9adBa728D920e8A6295C73CC55510401Da2A05E7

You can interact with this contract through the provided frontend, or directly via other Ethereum-compatible tools like Etherscan or Remix.

### Contributing
We welcome contributions to improve the DApp! If you have any suggestions or find bugs, feel free to open an issue or submit a pull request.

Steps to Contribute:

1. Fork the repository.

2. Create a new branch ```(git checkout -b feature/your-feature-name)```.

3. Make your changes.

4. Commit your changes ```(git commit -am 'Add new feature')```.

5. Push to your branch ```(git push origin feature/your-feature-name)```.

6. Create a new pull request.

### Acknowledgements
* Arbitrum: For providing a fast and low-cost layer-2 solution for Ethereum.
* Ethers.js: A library for interacting with the Ethereum blockchain.
* React: For building the frontend user interface.
