import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { ProfileComponent } from './profile/profile.component';
import { MynftsComponent } from './mynfts/mynfts.component';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { NavComponent } from './nav/nav.component';
import { NftscollectionComponent } from './nftscollection/nftscollection.component';
import { CardComponent } from './card/card.component';
import { MintnewcollectionComponent } from './mintnewcollection/mintnewcollection.component';
import { MintnewnftComponent } from './mintnewnft/mintnewnft.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    HomeComponent,
    CollectionsComponent,
    ProfileComponent,
    MynftsComponent,
    MycollectionsComponent,
    NavComponent,
    NftscollectionComponent,
    CardComponent,
    MintnewcollectionComponent,
    MintnewnftComponent,
    FooterComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
