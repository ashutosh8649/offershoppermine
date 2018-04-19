import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { CarryBagComponent } from './shared/header/navbar/carry-bag/carry-bag.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from './home-page/search-component/search-component.component';
import { ProductsHeaderComponent } from './home-page/products-header/products-header.component';
import { ProductsListComponent } from './home-page/products-list/products-list.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SearchSideBarComponent } from './shop-page/search-side-bar/search-side-bar.component';
import { SearchResultsComponent } from './shop-page/search-results/search-results.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSideBarComponent } from './user-profile/user-side-bar/user-side-bar.component';
import { UserContentComponent } from './user-profile/user-content/user-content.component';
import { LocationComponent } from './shared/header/location/location.component';
import { RelatedOffersService } from './services/related-offers.service';
import { ProductPageComponent } from './product-page/product-page.component';



@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    NavbarComponent,
    CarryBagComponent,
    FooterComponent,
    HomePageComponent,
    SearchComponentComponent,
    ProductsHeaderComponent,
    ProductsListComponent,
    ShopPageComponent,
    SearchSideBarComponent,
    SearchResultsComponent,
    ContactUsComponent,
    UserProfileComponent,
    UserSideBarComponent,
    UserContentComponent,
    LocationComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      RelatedOffersService,
      HttpModule,
      FormsModule,
      ReactiveFormsModule
     ],

  bootstrap: [AppComponent]
})
export class AppModule { }
