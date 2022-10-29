// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./NFTex.sol";

contract NFTex2 is NFTex {
    function test() public pure returns (string memory) {
        return "upgraded";
    }
}
