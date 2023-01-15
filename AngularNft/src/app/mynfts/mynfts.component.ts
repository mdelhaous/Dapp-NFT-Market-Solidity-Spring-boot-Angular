import { Component } from '@angular/core';
import { ContractService } from '../contract.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-mynfts',
  templateUrl: './mynfts.component.html',
  styleUrls: ['./mynfts.component.css']
})
export class MynftsComponent {
  
  nfts: any[] = [];
  public walletId: string = ''; 

  constructor(private walletService:WalletsService,private contractService:ContractService) { }
  
ngOnInit() {
 
  this.getmynfts();

}


getmynfts() {
  this.getId();
  this.contractService.getNFTs().then(async (res : any[]) => {
    const accountConnected = await this.walletService.checkWalletConnected();
setTimeout(()=>{
  for (let index = 0; index < res.length; index++) {
    if(accountConnected[0].toLowerCase() === res[index].nftOwner.toLowerCase()){
      console.log(res[index].nftOwner);
      this.nfts.push(res[index]);
    }    
  }
},2500);
    
  })


}

getId = async () => {
  const accounts = await this.walletService.checkWalletConnected();
  if(accounts.length > 0){
    this.walletId = accounts[0];
  }
}
}
