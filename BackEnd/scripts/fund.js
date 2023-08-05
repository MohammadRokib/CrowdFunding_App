const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);

    console.log("Funding.....");
    const txResponse = await fundMe.fund({ value: ethers.utils.parseEther("0.5") });
    const balance = await fundMe.provider.getBalance(fundMe.address);
    await txResponse.wait(1);
    
    console.log("Funded");
    console.log(`Current Balance: ${balance/1e18} ETH`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
