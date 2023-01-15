import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../contract.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-mintnewnft',
  templateUrl: './mintnewnft.component.html',
  styleUrls: ['./mintnewnft.component.css']
})

export class MintnewnftComponent {

  
  constructor(private walletService:WalletsService,
    private contractService:ContractService,private router:Router) {}
    
    mintnewnftsincollection(nftName: HTMLInputElement,nftPrice: HTMLInputElement) {
      const nftNameValue = nftName.value;
      const nftPricevalue = nftPrice.value;
      this.contractService.collectionmint(nftNameValue,nftPricevalue);
      this.router.navigateByUrl('/myprofile')
    }  
  }

