import { Component, OnInit } from '@angular/core';
import { RelatedOffersService } from '../services/related-offers.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [RelatedOffersService]
})
export class ProductPageComponent implements OnInit {

public offerList=[];
public newOfferList=[];
// public k=12;
// public j;
  constructor(private relatedOffersService: RelatedOffersService) { }

  ngOnInit() {
  	this.relatedOffersService.getOffers().subscribe(res=>{
  		this.offerList=res.offerList;
  		var len=12;
  		if(len>this.offerList.length)
  			{len=this.offerList.length}

  		var k=0;
  		var i=0;
  		while(k<len){

  			let j=0;
  			while(k<len && j<4){
  				this.newOfferList[i][j]= this.offerList[k];
  				j++;
  				k++;

  			}
  			i++;
  		}


   	})
  }


}
