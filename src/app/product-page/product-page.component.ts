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

public offerList:any=[];

  constructor(private relatedOffersService: RelatedOffersService) { }

  ngOnInit() {
    this.getSubscription();

  }

  getSubscription(){
     this.relatedOffersService.getOffers().subscribe(res=>{
      
      console.log(res);
      this.offerList=res;

      
     },
     error=>{alert("inside error")
   });
  }

}


