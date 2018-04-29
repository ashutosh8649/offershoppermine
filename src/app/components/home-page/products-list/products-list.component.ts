import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { OffersService } from '../../../services/offers.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [SearchService, OffersService]
})
export class ProductsListComponent implements OnInit {

  public offers : any;
  public priceAfterDiscount: any;

  constructor(private searchService : SearchService,
  private offersService : OffersService) { }

  ngOnInit() {
    this.loadOffers();
  }

  productPrice(offerOriginalPrice,offerDiscount){
    this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }
  
  loadOffers(){
    this.offersService.getOffers("pooja@gmail.com")
    .subscribe((res) =>{
      this.offers=res;
     },(error) =>{
    });
}
}
