// contracts/NonFunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import { ERC721 } from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
contract NonFunToken is ERC721, Ownable {

mapping(uint256 => string) public nameOfNFT;
            
mapping(uint256 => uint256) public priceOfNFT;
 // Constructor will be called on contract creation
    constructor() ERC721("NonFunToken", "NONFUN") {}

function mintCollectionNFT(address collector, uint256 tokenId, string memory nftName, uint256 nftPrice) public {
    _safeMint(collector, tokenId); 
    nameOfNFT[tokenId] = nftName;
    priceOfNFT[tokenId] = nftPrice;
}

  function getNFTName(uint256 tokenId) public view returns (string memory) {
    return nameOfNFT[tokenId];
}
function getNFTPrice(uint256 tokenId) public view returns (uint256) {
    return priceOfNFT[tokenId];
}

function buyNFT(uint256 tokenId) public payable {
    // Check if the token is available for sale
    require(keccak256(abi.encodePacked(nameOfNFT[tokenId])) != keccak256(abi.encodePacked("")), "Token is not for sale");

    // Get the address of the current owner
    address owner = ownerOf(tokenId);
        

    // Transfer ownearship of the NFT to the caller
    _transfer(owner, msg.sender,tokenId);
}
}