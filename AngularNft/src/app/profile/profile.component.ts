import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../wallets.service';
import { FormGroup,FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ContractService } from '../contract.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
  
  public profile :any
  public walletConnected: boolean = false;
  public walletId: string = ''; 
  public saved = false;
  nfts : any;
  constructor(private walletService:WalletsService,private router : Router,private contractService:ContractService) { }

  ngOnInit(): void {
    this.checkWalletConnected();
    this.getWalletId();
    
    setTimeout(()=>this.checkAccount(),1200)
  }
  checkAccount(){
    if(localStorage.getItem("connectedAccount")==this.walletId){
      this.saved = true;
    }
  }
  SaveData=async()=>{
    //console.log(this.addProfile.value);
    let timestampt = Date.now();
    const  profileconnexion = {
      adresseWallets : this.walletId,
      timestampt : timestampt
    }
    this.walletService.saveProfileData(profileconnexion);
    this.saved = true;
    localStorage.setItem("connectedAccount",this.walletId);
    this.router.navigateByUrl('/myprofile')
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];

    }
  }

  onGetRegister() {
    this.walletService.getRegister()
    .subscribe(data=>{
      this.profile=data;
    },err=>{
      console.log(err);
    });
  }

  getWalletId(){
    this.contractService.getAll().then((res : any[]) => {
      this.nfts = res;
      console.log(res[0]);
    })
}
}
