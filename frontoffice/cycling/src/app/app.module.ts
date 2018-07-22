import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Modules */
import { CoreModule } from './core/core.module'; // footer,header,notfound
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/* Pages Modules */
import { HomeModule } from './home/home.module'; // Card module is in here
import { AuctionModule } from './auctions/auction.module'; // All functionalities related to running auctions
import { ProfileModule } from './profile/profile.module'; // All functioanalities related to creating an account, login ...
import { ContactModule } from './contact/contact.module'; // Asking questions
import { OfferModule } from './offer/offer.module'; // All functionalities related to offering products (eg creating a product)


import { AppComponent } from './app.component';

import { UserService } from './core/services/user.service'; // Why UserService ? , No other services to be imported at this level ?
import { ProductService } from './core/services/product.service';
import { AuthenticationService } from './core/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,  
    AuctionModule,
    ProfileModule,
    ContactModule,
    OfferModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService,
    ProductService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
