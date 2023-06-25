// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "./PriceCoverter.sol";

contract FundMe {

    using PriceConverter for uint256;

    address[] private s_funders;
    uint256 public MIN_USD = 50 * 1e18;
    AggregatorV3Interface private s_priceFeed;
    mapping(address => uint256) private s_addToAmount;

    constructor(address s_priceFeedAddress) {
        s_priceFeed = AggregatorV3Interface(s_priceFeedAddress);
    }
    
    function fund() public payable {
        require(msg.value.getConversionRate(s_priceFeed) >= MIN_USD, "Insufficient Fund");
        s_funders.push(msg.sender);
        s_addToAmount[msg.sender] += msg.value;
    }
    
    function withdraw() public {

    }
}