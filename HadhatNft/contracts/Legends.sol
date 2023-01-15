
// contracts/NonFunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import { ERC721 } from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
contract Legends is ERC721, Ownable {
    mapping(uint256 => string) public nameOfNFT;

    // Constructor will be called on contract creation
    constructor() ERC721("Legends", "Leg") {}

    // Allows minting of a new NFT 
    function mintCollectionNFT(address collector, uint256 tokenId, string memory nftName) public onlyOwner() {
        _safeMint(collector, tokenId); 
         nameOfNFT[tokenId] = nftName;
    }
}