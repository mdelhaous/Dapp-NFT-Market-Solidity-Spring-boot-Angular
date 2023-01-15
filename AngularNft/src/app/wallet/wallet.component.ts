import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  tokenId:any;
  title = 'ng-connect-ethereum-wallet';

  public walletConnected: boolean = false;
  public walletId: string = ''; 

  constructor(private walletService:WalletsService,
    private contractService:ContractService
    
    ) { }
// tests /////////////////////
    teste1() {
      this.contractService.collectionName();
    }
    teste2() {
      this.contractService.collectionsymbol();
    }
    


    // teste3() {
    //   this.contractService.collectionmint();
    // }



    teste4() {
      this.contractService.getNumberOfNFTsForOwner();
    }

    // teste5() {
    //   this.contractService.getNFTOwner();
    // }

    teste6() {
      this.contractService.TransformOne();
    }
    teste7() {
      this.contractService.dep();
    }

  connectToWallet  = () => {
    this.walletService.connectWallet();
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
  
  ngOnInit(): void {
    this.checkWalletConnected();
  }

}