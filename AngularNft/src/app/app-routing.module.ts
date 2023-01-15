import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { walletconnect } from 'web3modal/dist/providers/connectors';
import { CardComponent } from './card/card.component';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { MintnewcollectionComponent } from './mintnewcollection/mintnewcollection.component';
import { MintnewnftComponent } from './mintnewnft/mintnewnft.component';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { MynftsComponent } from './mynfts/mynfts.component';
import { NavComponent } from './nav/nav.component';
import { NftscollectionComponent } from './nftscollection/nftscollection.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';



const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'connectwallet', component: WalletComponent },
  { path: 'listofcollections', component: CollectionsComponent },
  { path: 'myprofile', component: ProfileComponent },
  { path: 'mynfts', component: MynftsComponent },
  { path: 'mycollections', component: MycollectionsComponent },
  { path: 'nftofthiscollection', component: NftscollectionComponent },
  { path: 'card', component: CardComponent },
  { path: 'newcollection', component: MintnewcollectionComponent },
  { path: 'newnft', component: MintnewnftComponent },
  // { path: 'navbar', component: NavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
