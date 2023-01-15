import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from '../contract.service';
import { WalletsService } from '../wallets.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
[x: string]: any;
nfts: Array<any>=[];

  public walletConnected: boolean = false;
  public walletId: string = ''; 
  panierData : any;
  profile : any;
  constructor(private walletService:WalletsService,private contractService:ContractService,
    private router:Router) { }
  ngOnInit(): void {
    this.checkWalletConnected();
    
    setTimeout(()=>this.getPanierData(),1500);
  }

  onGetProfile() {
    this.walletService.getRegister()
    .subscribe(data=>{
      this.profile=data;
    },err=>{
      console.log(err);
    });
  }
  getPanierData(){
    this.walletService.getPanierDataByid(this.walletId).subscribe(async (result ) =>{
      this.panierData = result;
    })
  }
  getId = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletId = accounts[0];
    }
  }
  Deletecard(id:any){
    this.walletService.deletePanier(id).subscribe(()=>{
      window.location.reload();
      Swal.fire({
        position: 'top-left',
        icon: 'success',
        title: 'NFT is Deleted Successfully',
        showConfirmButton: false,
        timer: 2500
      });
    });
  }
  transf(){
    this.contractService.TransformOne()
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
  Buythisnft(){
    this.contractService.TransformOne();
    Swal.fire({
      position: 'top-left',
      icon: 'success',
      title: 'Approve Your Transaction Securely With METAMASK',
      showConfirmButton: false,
      timer: 2500
    });
  }
}
