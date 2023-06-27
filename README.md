<div align="center">
  <a href="https://github.com/MohammadRokib/repo_name">
    <img src="images/crowd_funding.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Crowd Funding</h3>

<p align="center">
    A Blockchain based Crowd Funding Application
    <br />
    <a href="https://github.com/MohammadRokib/CrowdFunding_App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MohammadRokib/CrowdFunding_App/issues/">Report Bug</a>
    ·
    <a href="https://www.linkedin.com/in/m0hammadrokib/">Linkedin</a>
    ·
    <a href="mohammadrokibkhan@gmail.com">Mail</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#quickstart">Quickstart</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#interaction">Interaction</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

In this project I have tried to make a web3 based application. Which is a **Crowd Funding** App based on Ethereum.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Solidity
* Node.js
* JavaScript
* Hardhat
* Yarn

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Requirements

In order to clone and run the project these have to be installed in your machine.

* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  
  * Check if the installation was successfull or not with `git --version` and you should see a response like `git version x.x.x`

* [Node.js](https://nodejs.org/en)
  
  * You'll be able to run the following command if you install nodejs:
    
    * `node --version` and get an ouput like: `vx.x.x`

* [Yarn](https://yarnpkg.com/getting-started/install) instead of npm
  
  * You'll be able to run the following command if you install yarn:
    
    * `yarn --version` and get an output like: `x.x.x`
    
    * You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) or `corepack`

* [MetaMask](https://metamask.io/) pin it after istallation in your default browser

### Quickstart

```shell
git clone https://github.com/MohammadRokib/CrowdFunding_App.git
cd CrowdFunding_App/FronEnd
yarn
cd ../
cd BackEnd
yarn
```

Put this `.env` file in the `BackEnd` folder with necessary API key and account private key:

```env
GOERLI_RPC_URL = 
SEPOLIA_RPC_URL = 
PRIVATE_KEY = 
ETHERSCAN_API_KEY = 
COINMARKETCAP_API_KEY = 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Installation

Type this command from the `BackEnd` folder:

```shell
yarn hardhat node
```

This will run a local blockchain with 20 nodes. You can see the following if the process was successfull:

```shell
Compiled 8 Solidity files successfully
Dploying Mock PriceFeed Contract....
deploying "MockV3Aggregator" (tx: 0x3d732abdeda8235691578f5eae48ec57c18e6860c18196ab7b211ca8f74dce2b)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 569759 gas
Mocks deployed
_______________________________________
deploying "FundMe" (tx: 0x3f00f50e2b7462430eac02330c848768dbc8443130aa9c25eca9a0218719fade)...: deployed at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 with 924048 gas
Finished dploying
_______________________________
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

Account #5: 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000 ETH)
Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

Account #6: 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000 ETH)
Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

Account #7: 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000 ETH)
Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

Account #8: 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000 ETH)
Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

Account #9: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000 ETH)
Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

Account #10: 0xBcd4042DE499D14e55001CcbB24a551F3b954096 (10000 ETH)
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

Account #11: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788 (10000 ETH)
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Account #12: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a (10000 ETH)
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Account #13: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec (10000 ETH)
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Account #14: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097 (10000 ETH)
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

Account #15: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 (10000 ETH)
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account #16: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30 (10000 ETH)
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account #17: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E (10000 ETH)
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

Account #18: 0xdD2FD4581271e230360230F9337D5c0430Bf44C0 (10000 ETH)
Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.
```

- Then open `metamask` in your default browser and add `Hardhat-Localhost` network manually. Then import `Account-0` `Account-1` from above into your metamask. [See how](https://github.com/MohammadRokib/CrowdFunding_App/blob/main/metamask.md)

- Open the `index.html` file with `vscode` and then open the file with `live server`. The page will come up in your default browser.

- You can see a `connect button`, click on it. A metamask prompt will come up asking you to connect your accounts. Select the accounts you just imported. The accounts should be like this `Account x (0xf39...2666)` and `Account y (0x709...79c8)`

- Select those accounts and click `next` in the bottom and then click `connect`. The accounts are connected successfully.

- `Right click` on your mouse and click `inspect` then go to the `console` tab to see responses from backend.

### Interaction

* **<u>Fund:</u>** Enter fund amount and click **Fund**. A metamask prompt will comeup asking you to confirm. After confirming you can see the message `Funded x ETH` in the `inspect console`

* **<u>Balance:</u>** Click **Balance** to check the current balance of the fund account. The balance can be seen in the `inspect console`

* **<u>Withdraw:</u>** Switch to `Account x (0xf39...2666)` then click withdraw. Then click `confirm` after that you can see a message `withdraw successful` in the `inspect console` Now if you check the balance of the contract it will be 0 after withdraw.

**Note:** We can only withdraw from `Account x (0xf392666)` as it is an `owner only` function and the owner of the contract is `Account x (0xf392666)`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

MohammadRokib - [Linkedin](https://www.linkedin.com/in/m0hammadrokib/) - mohammadrokibkhan@gmail.com

GitHub: [https://github.com/MohammadRokib](https://github.com/MohammadRokib)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Solidity-style-guide](https://docs.soliditylang.org/en/v0.8.13/style-guide.html)

- [Chai-Mathcers](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html)

- [ParseEther](https://docs.ethers.org/v5/api/utils/display-logic/#utils-parseEther)

- [Big-Numbers](https://docs.ethers.org/v5/api/utils/bignumber/#BigNumber)

- [Transaction-Receipt](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionResponse)

- [Solidity-console.log](https://hardhat.org/tutorial/debugging-with-hardhat-network#solidity-console-log)

- [Layout-of-State-Variables-in-Storage](https://docs.soliditylang.org/en/v0.8.13/internals/layout_in_storage.html)

- [Purpose of the "memory keyword"](https://stackoverflow.com/questions/33839154/)

- [Opcodes](https://github.com/crytic/evm-opcodes)

- [Conditional-ternary-Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- [How-to-Send-Transactions-on-Ethereum](https://docs.alchemy.com/docs/how-to-send-transactions-on-ethereum)

- [window.ethereum Detect-the-provider](https://docs.metamask.io/wallet/how-to/use-mobile/#detect-the-provider)

- [Restricted & Urestricted methods](https://docs.metamask.io/wallet/reference/rpc-api/#restricted-methods)

- [Installing-Ethers](https://docs.ethers.org/v5/getting-started/#getting-started--importing--node-js)

- [Web3Provider](https://docs.ethers.org/v5/api/providers/other/#Web3Provider)

- [JsonRpcProvider](https://docs.ethers.org/v5/api/providers/jsonrpc-provider/)

- [Event-Emitter-Methods provider.once](https://docs.ethers.org/v5/api/providers/provider/#Provider-once)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/screenshot.png
