const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
};
const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
    developmentChains,
    networkConfig,
    DECIMALS,
    INITIAL_ANSWER,
};