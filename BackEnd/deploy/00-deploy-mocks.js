const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;

    if (developmentChains.includes(network.name)) {
        log("Dploying Mock PriceFeed Contract....");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        log("Mocks deployed");
        log("_______________________________________");
    }
};

module.exports.tags = ["all", "mocks"];
