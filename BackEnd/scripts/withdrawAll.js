const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    
    console.log("Withdrawing.....");
    const txResponse = await fundMe.withdrawAll();
    const balance = await fundMe.provider.getBalance(fundMe.address);
    await txResponse.wait(1);
    
    console.log("Withdraw complete");
    console.log(`Current balance: ${balance/1e18} ETH`);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
