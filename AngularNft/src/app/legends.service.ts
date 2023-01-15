import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
const  BaseContract  = require( "../../../HadhatNft/artifacts/contracts/Legends.sol/Legends.json")
import Web3 from "web3";
import { from } from 'rxjs';

import { FileService } from './file.service';


@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  constructor() { }

//In this Angular service we will make a call to the functions of our contract depolyed on HARDHAT : by using the web3js librarie..

//----------------------------------------------deploy the contract from the frontend---------------------------------------------------------------------------------


//----------------------------------------------get the name and the owner of collection---------------------------------------------------------------------------------
  async collectionName() : Promise<any[]> {
const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const nameofcollection = await myContract.methods.name().call();
const theowner = await myContract.methods.owner().call();
// console.log(`Token Collection Name: ${nameofcollection}\n`);
// console.log(`the owner is : ${theowner}\n`);
var nf  =  [nameofcollection];
return nf;
}

//----------------------------------------------get the symbol of collection---------------------------------------------------------------------------------
async collectionsymbol() : Promise<any[]> {
const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const symbolofcollection = await myContract.methods.symbol().call();
// console.log(`Token Collection Symbol: ${symbolofcollection}\n`);
var sy  =  [symbolofcollection];
return sy;
}

//----------------------------------------------Mint new NFTs from the collection using custom function mintCollectionNFT()-------------------------------------------
async collectionmint(nftNameValue: string){
  
  const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner = await myContract.methods.owner().call();
  const symbol = await myContract.methods.symbol().call();
  
      const initialMintCount = 1; // Number of NFTs to mint
      let initialMint = [];
      for (let i = 1; i <= initialMintCount; i++) {
        let tx = await myContract.methods.mintCollectionNFT(theowner, i.toString(), nftNameValue).send({ from: theowner });
          initialMint.push(i.toString());
      } 
  console.log(`${symbol} NFT with tokenIds ${initialMint} and minted to: ${theowner}\n`);
  }

//---------------------------------------------function to track the number of NFTs owned by a particular account.-------------------------------------------
async getNumberOfNFTsForOwner(){
  const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner = await myContract.methods.owner().call();
  const symbolofcollection = await myContract.methods.symbol().call();
  const contractOwnerBalances = await myContract.methods.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266").call();
  //const contractOwnerBalances = await myContract.methods.getBalance(theowner).call();
  console.log(`${theowner} has ${contractOwnerBalances} NFTs from this ${symbolofcollection} collection\n`);
  
}

//---------------------------------------------get the owner of an NFT with a specific ID---------------------------------------------
async getNFTOwner() : Promise<any[]> {
const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const theowner =  await myContract.methods.owner().call();
const initialMintCount = 3; // Number of NFTs to mint
let initialMint = [];
for (let i = 1; i <= initialMintCount; i++) 
{
initialMint.push(i.toString());
} 
const tokenId = initialMint[0];
const nftOwner = await myContract.methods.ownerOf(tokenId).call();
const nftName = await myContract.methods.nameOfNFT(tokenId).call(); // Look up the name of the NFT by its token ID
// console.log(nftName)
  if (nftOwner === theowner) {
    console.log(`The NFT with token ID ${tokenId} (named "${nftName}") is owned by ${theowner}`);
} else {
    console.log(`The NFT with token ID ${tokenId} (named "${nftName}") is not owned by ${theowner}`);
}
var nft  =  [tokenId,nftOwner,nftName];
return nft;
}


//------------------------------------------- this function must moves the NFT1 FROM "address_from" TO "address_to"-------------------------------------------

async TransformOne(){
const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const symbol = await myContract.methods.symbol().call();
const theowner = await myContract.methods.owner().call();
const to ='0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
const from = await myContract.methods.owner().call();     // TRANSF NFT FROM AN ACCOUNT TO ANOTHER ONE
const initialMintCount = 1; 
let initialMint = [];
for (let i = 1; i <= initialMintCount; i++) 
{
initialMint.push(i.toString());
} 
const tokenId = initialMint[0];
try {
  const apr=await myContract.methods.approve(to, tokenId).send({ from: from });
  console.log(apr);
  const tx = await myContract.methods.transferFrom(from, to, tokenId).send({ from: from });
  console.log(tx);
  console.log(`NFT with token ID ${tokenId} transferred from ${from} to ${to}`);
} catch (error) {
  console.error(error);
}
  const nftOwner = await myContract.methods.ownerOf(tokenId).call();

  if (nftOwner === theowner) {
    console.log(`The NFT with token ID ${tokenId} is owned by ${theowner}`);
  } else {
    console.log(`The NFT with token ID ${tokenId} is not owned by ${theowner}`);
  }
}
}