import { Component, OnInit } from '@angular/core';
import { RelatedOffersService } from '../services/related-offers.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [RelatedOffersService]
})
export class ProductPageComponent implements OnInit {

public offerList=[];
public newOfferList=[];

  constructor(private relatedOffersService: RelatedOffersService) { }

  // ngOnInit() {
  // 	this.relatedOffersService.getOffers().subscribe(res=>{
  // 		this.offerList=res.offerList;

  //  	});
  // }

ngOnInit() {}
}
