
import { TestBed, inject, async } from '@angular/core/testing';

import { ProductDetailService } from './product-detail.service';

fdescribe('ProductDetailService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailService]
    });

  });

  it('should be created', inject([ProductDetailService], (service: ProductDetailService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an offer', inject([ProductDetailService], (service: ProductDetailService) =>{
service.getOfferById('offer-204').subscribe(results=>{
	expect(results).toEqual('')
}) 

}));

});
