import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../contract.service';
import { LegendsService } from '../legends.service';
import { WalletsService } from '../wallets.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {


  nfts: Array<any>=[];
  public walletId: string = ''; 
  constructor(private walletService:WalletsService,private contractService:ContractService,private router:Router) { }
ngOnInit() {

  this.getmynfts();
}

getmynfts() {
  this.getId();
  this.contractService.getNFTs().then(async (res : any[]) => {
    const accounts = await this.walletService.checkWalletConnected();
    if (accounts[0]==="0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") {
      console.log('rien');
    } else if(accounts[0]==="0x70997970c51812dc3a010c7d01b50e0d17dc79c8") {
      this.nfts.push(res[0]);
      // console.log(res[0])
      // this.nfts.push(res[1]);
      // this.nfts.push(res[2]);
    }
  })
}
getId = async () => {
  const accounts = await this.walletService.checkWalletConnected();
  if(accounts.length > 0){
    this.walletId = accounts[0];
  }
}
  async addtocard(tokenId:any,nftName:any,collectionName:any,nftOwner:any){
    
    const ntf = {
      connectedAccount : this.walletId,
      nameofcollection : collectionName,
      nftName : nftName,
      nftOwner:nftOwner,
      tokenId : tokenId, 
    }


  this.walletService.savePanierData(ntf);
  this.router.navigateByUrl("/card");
  Swal.fire({
    position: 'top-left',
    icon: 'success',
    title: 'Your NFT in addition successfully',
    showConfirmButton: false,
    timer: 2500
  });
}  
}