// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice(AggregatorV3Interface s_priceFeed) internal view returns (uint256) {
        (, int price,,,) = s_priceFeed.latestRoundData();
        return uint256 (price*1e10);
    }

    function getConversionRate(uint256 val, AggregatorV3Interface s_priceFeed) internal view returns (uint256) {
        uint256 ethPrice = getPrice(s_priceFeed);
        uint256 ethUSD = (ethPrice * val) / 1e18;
        return ethUSD;
    }
}