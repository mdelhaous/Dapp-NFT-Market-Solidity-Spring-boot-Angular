// contracts/NonFunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import { ERC721 } from "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
contract Galactic is ERC721, Ownable {
    // Mapping to store the name of each NFT
    mapping(uint256 => string) public nameOfNFT;
    // Constructor will be called on contract creation
    constructor() ERC721("Galactic", "Gala") {}

// // Allows minting of a new NFT 
    function mintCollectionNFT(address collector, uint256 tokenId, string memory nftName) public onlyOwner() {
        _safeMint(collector, tokenId); 
         nameOfNFT[tokenId] = nftName;
    }
function getNFTName(uint256 tokenId) public view returns (string memory) {
    return nameOfNFT[tokenId];
}
} 
 
                                                 //  if we would use image 

//     mapping(uint256 => string) public nftMetadata;
//     function mintCollectionNFT(address collector, uint256 tokenId, string memory metadata) public onlyOwner() {
//     _safeMint(collector, tokenId); 
//     nftMetadata[tokenId] = metadata;
// }
// function getImage(uint256 _tokenId) public view returns (string memory) {
//   return nftMetadata[_tokenId];
// }



