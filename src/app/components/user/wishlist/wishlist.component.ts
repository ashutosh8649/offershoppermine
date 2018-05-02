import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { AuthorizationService } from '../../../services/authorization.service';
import { MessageService } from './../../../services/message.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers:[WishlistService, AuthorizationService, MessageService]
})
export class WishlistComponent implements OnInit {

  constructor(
    private wishlistService: WishlistService,
    private authorizationService: AuthorizationService,
    private messageService: MessageService,
    private _vcr: ViewContainerRef
    ) { }

  priceAfterDiscount: any;

  ngOnInit() {
    this.getUserId();
  }
  public wishlistOffers=[];
  public userInfo;
  public userId;

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }
  getUserId() {
    this.authorizationService.getUserId().subscribe((res) =>{
      this.userInfo = res.text().split(',');
      this.userId = this.userInfo[2];
      this.getWishlist();
    }, (error) =>{
      console.log(error);
    })
  }
  getWishlist() {
    this.wishlistService.getWishlist(this.userId).subscribe((res) =>{
      this.wishlistOffers = res;
      console.log(this.wishlistOffers);
    }, (error) =>{
    })
  }
  deleteOffer(offerId,userId){
    this.messageService.deleteConfirmation(()=>
      this.wishlistService.deleteRestaurant(offerId,userId).subscribe((res) =>{
        this.messageService.showSuccessToast(this._vcr,"Deleted");
        this.getWishlist();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      }));
  }
}
