import { Component, OnInit } from '@angular/core';
import { AddOfferService } from '../../../services/add-offer.service';
import { FormsModule} from '@angular/forms';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
	selector: 'app-add-offer',
	templateUrl: './add-offer.component.html',
	styleUrls: ['./add-offer.component.css'],
	providers:[ AddOfferService,AuthorizationService ]
})

export class AddOfferComponent implements OnInit {
	offerId:String ;
	userId: String ;
	dateOfAnnouncement:any;
	offerCategories:String;
	offerValidity:any;
	discount:any;
	keywords:String;
	offerDescription:String;
	offerTerms:String;
	offerTitle:String;
	originalPrice:any;
	city:String;
	state:String;
	street:String;
	zipCode:any;
	name:String;
	number:String;
	offerRating:any;
	coupon:number;
	public userInfo;
	shopAddress:any;

	obj={};
	toRedis={};
	User:any={};

	date = new Date();

	constructor(private addOfferService: AddOfferService,
		private authorizationService: AuthorizationService) { }

	ngOnInit()
	{
		this.getUserId();

	}


	getUserId() {
		this.authorizationService.getUserId().subscribe((res) =>{
		  this.userInfo = res.text().split(',');
		  this.userId = this.userInfo[2];
		  this.getOffers(this.userId);
		}, (error) =>{
		})
	  }

	public offers=[];

	getOffers(userId) {

		this.addOfferService.getOffersList(userId).subscribe((res) =>{

			this.offers = res;
		}
		, (error) =>{console.log("error");
	})
	}

	deleteOffer(offerId){
		this.addOfferService.deleteOffer(offerId).subscribe((res) =>{
			this.getOffers(this.userId);
		}, (error) =>{
			alert(error + "deleting restaurant does not works");
		})
	}

	reset(){
		this.offerId="";
		this.userId="";
		this.offerTitle="";
		this.offerValidity="";
		this.dateOfAnnouncement="";
		this.offerDescription="";
		this.originalPrice="";
		this.discount="";
		this.offerRating=0.0;
		this.offerCategories="";
		this.offerTerms="";
		this.keywords="";
		this.city="";
		this.state="";
		this.street="";
	}

	updateOffer(offerId){
		let user=this.offers.find(ele=>ele.offerId===offerId);
		this.User=user;
		this.offerCategories=user.offerCategories;
		this.discount=user.discount;
		this.keywords=user.keywords;
		this.offerValidity=user.offerValidity;
		this.offerDescription=user.offerDescription;
		this.offerTerms=user.offerTerms;
		this.offerTitle=user.offerTitle;
		this.originalPrice=user.originalPrice;
	}

	submit(){
		this.obj={
			"offerId" :this.User.offerId,
			"userId"  :this.User.userId,
			"offerTitle" :this.offerTitle,
			"offerValidity" :this.offerValidity,
			"dateOfAnnouncement" :this.User.dateOfAnnouncement,
			"address" :this.User.address,
			"offerDescription" :this.offerDescription,
			"originalPrice" :this.originalPrice,
			"discount" :this.discount,
			"offerRating" :this.User.offerRating,
			"offerCategories" :this.offerCategories,
			"offerTerms" :this.offerTerms,
			"keywords" :this.keywords,
			"imageURL":"image_url"
		}
		this.addOfferService.putOffer(this.obj).subscribe((res) =>{
			this.getOffers(this.userId);
			this.reset();
		}, (error) =>{

		})

	}

	getOffer(){
		this.addOfferService.getShopAddress(this.userId).subscribe((res) =>{
			this.shopAddress=res.shopAddress;
			this.addOffer();
		}, (error) =>{
			console.log(error);
		})

	}

	addOffer(){
		let time = "T"+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds()+"Z";
		time = this.offerValidity+time;
		console.log("dateOfAnnouncement: "+this.offers[0].dateOfAnnouncement);
		console.log("Expected format: 2018-04-24T04:34:31.660Z");
		this.obj={
			"userId"  :this.userId,
			"offerTitle" :this.offerTitle,
			"offerValidity" :time,
			"dateOfAnnouncement" :this.offers[0].dateOfAnnouncement+"0Z",
			"address" :this.shopAddress,
			"offerDescription" :this.offerDescription,
			"originalPrice" :this.originalPrice,
			"discount" :this.discount,
			"offerRating" :0.0,
			"offerCategories" :this.offerCategories,
			"offerTerms" :this.offerTerms,
			"keywords" :this.keywords
		}

		this.addOfferService.addNewOffer(this.obj).subscribe((res) =>{
			this.getOffers(this.userId);
		}, (error) =>{
			console.log("Error:");
			console.log(error);
		})

		this.toRedis={
				 "keywords":this.keywords 
				}
			 this.addOfferService.addToRedis(this.toRedis).subscribe((res) =>{ }, (error) =>{
			  })

	}

couponValidate()
{

	this.addOfferService.couponValidateService(this.coupon,this.userId).subscribe((res) =>{

		let couponData = res;

		if(couponData==null) {
			alert("wrong coupon entered");
		}
		else {
			let obj = {
				"couponId" : couponData.couponId,
				"userId" : couponData.userId,
				"offerId" : couponData.offerId,
				"vendorId" : couponData.vendorId,
				"rating" : couponData.rating,
				"vendorValidationFlag" : true
			}
			this.addOfferService.changeFlag(obj).subscribe((res) =>{
				alert("coupon verified");




			}, (error) =>{

			})
		}

	}
	, (error) =>{console.log("error");
})
}



}
