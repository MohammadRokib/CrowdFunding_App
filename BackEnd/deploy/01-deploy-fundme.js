require("dotenv").config();

const { network } = require("hardhat");
const { verify } = require("../utils/verify")
const {
    developmentChains,
    networkConfig,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    let ethUsdPriceFeedAddress;

    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;
    const chainId = network.config.chainId;

    if (developmentChains.includes(network.name)) {
        const ethUsdPriceFeed = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdPriceFeed.address;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Finished dploying");
    log("_______________________________");

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(fundMe.address, [ethUsdPriceFeedAddress]);
    }
};

module.exports.tags = ["all", "fundme"];