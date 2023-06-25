// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "./PriceConverter.sol";

error FundMe__NotOwner();

contract FundMe {

    using PriceConverter for uint256;

    address private i_owner;
    address[] private s_funders;
    uint256 public MIN_USD = 50 * 1e18;
    AggregatorV3Interface private s_priceFeed;
    mapping(address => uint256) private s_addToAmount;

    constructor(address s_priceFeedAddress) {
        s_priceFeed = AggregatorV3Interface(s_priceFeedAddress);
        i_owner = msg.sender;
    }

    modifier onlyOwner {
        if (msg.sender != i_owner) revert FundMe__NotOwner();
        _;
    }
    
    function fund() public payable {
        require(msg.value.getConversionRate(s_priceFeed) >= MIN_USD, "Insufficient Fund");
        s_funders.push(msg.sender);
        s_addToAmount[msg.sender] += msg.value;
    }
    
    function withdraw() public onlyOwner{
        uint256 s = s_funders.length;
        for (uint256 i = 0; i < s; i++) {
            s_addToAmount[s_funders[i]] = 0;
        }
        s_funders = new address[](0);
        (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Transaction Failed");
    }

    function getOwner() public view returns (address) {
        return i_owner;
    }

    function getFunder(uint256 i) public view returns (address) {
        return s_funders[i];
    }

    function getAddToAmount(address adr) public view returns (uint256) {
        return s_addToAmount[adr];
    }

    function getPriceFeed() public view returns (AggregatorV3Interface) {
        return s_priceFeed;
    }
}