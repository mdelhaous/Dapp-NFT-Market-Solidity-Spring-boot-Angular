import {Inject, Injectable} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
const  BaseContract  = require( "../../../HadhatNft/artifacts/contracts/NonFunToken.sol/NonFunToken.json");
import Web3 from "web3";
import { from } from 'rxjs';

import { FileService } from './file.service';


declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor() {
  }
//In this Angular service we will make a call to the functions of our contract depolyed on HARDHAT : by using the web3js librarie..

//----------------------------------------------deploy the contract from the frontend---------------------------------------------------------------------------------
async dep(){
  
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner = await myContract.methods.owner().call();
  const deployment = myContract.deploy({ data: BaseContract.abi });
  const instance = await deployment.send({ from: theowner, gas:  1000000  });
}

async  getAccounts() {
  const web3 = new Web3(Web3.givenProvider);
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

//----------------------------------------------get the name and the owner of collection---------------------------------------------------------------------------------
async collectionName() : Promise<any[]> {
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const nameofcollection = await myContract.methods.name().call();
const theowner = await myContract.methods.owner().call();
// console.log(`Token Collection Name: ${nameofcollection}\n`);
// console.log(`the owner is : ${theowner}\n`);
var nft  =  [nameofcollection];
return nft;
}

//----------------------------------------------get the symbol of collection---------------------------------------------------------------------------------
async collectionsymbol() : Promise<any[]> {
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const web3 = new Web3(Web3.givenProvider);
const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
const symbolofcollection = await myContract.methods.symbol().call();
// console.log(`Token Collection Symbol: ${symbolofcollection}\n`);
var sym  =  [symbolofcollection];
return sym;
}

//----------------------------------------------Mint new NFTs from the collection using custom function mintCollectionNFT()-------------------------------------------
async collectionmint(nftNameValue: string, price:any){
  
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner = await myContract.methods.owner().call();
  const symbol = await myContract.methods.symbol().call();
  const accounts = await web3.eth.getAccounts();
  const address = accounts[0];
  
      const initialMintCount = 1; // Number of NFTs to mint
      let initialMint = [];
      for (let i = 1; i <= initialMintCount; i++) {
        let tx = await myContract.methods.mintCollectionNFT(address, i.toString(), `${nftNameValue} ${i}`, price).send({ from: address,gas:126427 });
          initialMint.push(i.toString());
      } 
  console.log(`${symbol} NFT with tokenIds ${initialMint} and minted to: ${theowner}\n`);
  }

//---------------------------------------------function to track the number of NFTs owned by a particular account.-------------------------------------------
async getNumberOfNFTsForOwner(){
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner = await myContract.methods.owner().call();
  const symbolofcollection = await myContract.methods.symbol().call();
  const contractOwnerBalances = await myContract.methods.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266").call();
  //const contractOwnerBalances = await myContract.methods.getBalance(theowner).call();
  console.log(`${theowner} has ${contractOwnerBalances} NFTs from this ${symbolofcollection} collection\n`);
  
}

//---------------------------------------------get the owner of an NFT with a specific ID---------------------------------------------

async getNFTs(): Promise<any[]> {
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner =  await myContract.methods.owner().call();
  const nameofcollection = await myContract.methods.name().call();
  const initialMintCount = 1; // Number of NFTs to mint
  let initialMint = [];
  for (let i = 1; i <= initialMintCount; i++) {
    initialMint.push(i.toString());
  } 
  const nfts = [];
  for (const tokenId of initialMint) {
    const nftOwner = await myContract.methods.ownerOf(tokenId).call();
    const nftName = await myContract.methods.nameOfNFT(tokenId).call(); // Look up the name of the NFT by its token ID
    
    nfts.push({
      tokenId: tokenId,
      nftOwner: nftOwner,
      nftName: nftName,
      nameofcollection:nameofcollection
    });
  }
  return nfts;
}


//------------------------------------------- this function must moves the NFT1 FROM "address_from" TO "address_to"-------------------------------------------


async TransformOne(){
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
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
  const nftPrice = await myContract.methods.getNFTPrice(tokenId).call();
  console.log(nftPrice);
    // Call the contract's buyNFT function
    const nfOwner = await myContract.methods.ownerOf(tokenId).call();
    const tx=myContract.methods.buyNFT(tokenId).send({ from: to,value: web3.utils.toWei(nftPrice.toString(), 'ether')});
     // Add the NFT price to the balance of the owner
     web3.eth.sendTransaction({from: to, to: from, value: web3.utils.toWei(nftPrice.toString())});
     // Decrease the NFT price from the wallet of the buyer
     web3.eth.sendTransaction({from: from, to: to, value: web3.utils.toWei(nftPrice.toString())});
    const nftOwner = await myContract.methods.ownerOf(tokenId).call();
    console.log(nftOwner)
  
  
  }
async getAll(): Promise<any[]> {
  const web3 = new Web3(Web3.givenProvider);
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const address = accounts[0];
  return [address]
}


async getNFTOw(): Promise<any[]> {
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const web3 = new Web3(Web3.givenProvider);
  const myContract = new web3.eth.Contract(BaseContract.abi, contractAddress);
  const theowner =  await myContract.methods.owner().call();
  const nameofcollection = await myContract.methods.name().call();
  const initialMintCount = 1; // Number of NFTs to mint
  let initialMint = [];
  for (let i = 1; i <= initialMintCount; i++) {
    initialMint.push(i.toString());
  } 
  const nftowner = [];
  for (const tokenId of initialMint) {
    const nftOwner = await myContract.methods.ownerOf(tokenId).call();
    nftowner.push({
      nftOwner: nftOwner,
    });
  }
  return nftowner;
}
}