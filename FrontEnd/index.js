import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const fundButton = document.getElementById("fund");
const connectButton = document.getElementById("connectButton");
const balanceButton = document.getElementById("balanceButton");
const withdrawButton = document.getElementById("withdrawButton");

fundButton.onclick = fund;
connectButton.onclick = connect;
balanceButton.onclick = getBalance;
withdrawButton.onclick = withdraw;

async function connect() {
    if (typeof window.ethereum != "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (e) {
            console.log(e);
        }
        connectButton.innerHTML = "Connected";
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
    } else {
        console.log("Install Metamask");
    }
}

async function getBalance() {
    if (typeof window.ethereum != "undefined") {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(contractAddress);
            console.log(`Current balance: ${ethers.utils.formatEther(balance)} ETH`);
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log("Install Metamask");
    }
}

async function fund() {
    const ethAmount = document.getElementById("ethAmount").value;
    console.log(`Funding ${ethAmount} ETH`);
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const txResponse = await contract.fund({ value: ethers.utils.parseEther(ethAmount)});
            await listenForTxMine(txResponse, provider);
            console.log(`Funded ${ethAmount} ETH`);
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log("Install Metamask");
    }
}

async function withdraw() {
    console.log("Withdrawing funds.....");
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            const txResponse = await contract.withdraw();
            await listenForTxMine(txResponse, provider);
            console.log("Withdraw complete");
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log("Install Metamask");
    }
}

function listenForTxMine(txResponse, provider) {
    console.log(`Mining ${txResponse.hash}`);
    return new Promise((resolve, reject) => {
        provider.once(txResponse.hash, (txReceipt) => {
            console.log(`Completed with ${txReceipt.confirmations} confirmations`);
            resolve();
        });
    });
}