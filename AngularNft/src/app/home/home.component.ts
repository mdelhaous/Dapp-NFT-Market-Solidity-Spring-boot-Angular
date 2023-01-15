import { Component } from '@angular/core';
import { ContractService } from '../contract.service';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public walletConnected: boolean = false;
  public walletId: string = ''; 

  constructor(private walletService:WalletsService,
    private contractService:ContractService
    
    ) { }

    ngOnInit(): void {
      this.checkWalletConnected();
  
    
  
    }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
}

