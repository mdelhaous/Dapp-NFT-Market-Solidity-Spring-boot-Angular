import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { id } from 'ethers/lib/utils';


@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  public ethereum ;
  Profileurl="http://localhost:9999/REGISTER-SERVER";
  Panierurl="http://localhost:9999/PANIER-SERVER";
  constructor(private router: Router,private http: HttpClient) { 
    const {ethereum} = <any>window
    this.ethereum = ethereum
  }

  saveProfileData(data: any){
    return this.http.post(this.Profileurl+"/AddProfiles",data).subscribe((result)=>{
      console.log(result);
    });
  }
  
  savePanierData(data: any){
    console.log(data);
    return this.http.post(this.Panierurl+"/Panier",data).subscribe((result)=>{
      console.log(result);
    });
  }
  getPanierData(){
    return this.http.get(this.Panierurl+"/Panier");
  }
  getPanierDataByid(id :any){
    console.log(id)
    return this.http.get(this.Panierurl+"/PanierbyId/"+id);
  }

  deletePanier(id:any){
    return this.http.delete(this.Panierurl+"/Panier/"+id);
  }

  public getRegister(){
    return this.http.get("http://localhost:9999/REGISTER-SERVER/Profiles");
  }

  public connectWallet = async () => {
    try{
      if(!this.ethereum) return alert("Please install meta mask");
      const accounts = await this.ethereum.request({method: 'eth_requestAccounts'});
      this.router.navigateByUrl("myprofile");
  
      
    }
    catch(e){
       throw new Error("No thereum object found")
    }
    //window.location.reload();
    Swal.fire({
      position: 'top-left',
      icon: 'success',
      title: 'Connected with Success',
      showConfirmButton: false,
      timer: 3000
    });
  }

  public checkWalletConnected = async () => {
    try{
      if(!this.ethereum) return alert("Please install meta mask ")
      const accounts = await this.ethereum.request({method: 'eth_accounts'});
      return accounts;
    }
    catch(e){
      throw new Error("No ethereum object found");
    }
  }
  
}
