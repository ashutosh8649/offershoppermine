import { Component, OnInit } from '@angular/core';
import { AddOfferService } from '../../../services/add-offer.service';
import { FormsModule} from '@angular/forms';

@Component({
	selector: 'app-add-offer',
	templateUrl: './add-offer.component.html',
	styleUrls: ['./add-offer.component.css'],
	providers:[ AddOfferService ]
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
	offerRating:String;
	coupon:number;

	obj={};
	User:any={};

	date = new Date();

	constructor(private addOfferService: AddOfferService) { }

	ngOnInit()
	{
		this.getOffers();
	}

	public offers=[];

	getOffers() {

		this.addOfferService.getOffersList().subscribe((res) =>{

			this.offers = res;
			console.log(this.offers);
		}
		, (error) =>{console.log("error");
	})
	}

	deleteOffer(offerId){
		this.addOfferService.deleteOffer(offerId).subscribe((res) =>{
			this.getOffers();
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
		this.offerRating="";
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
			this.getOffers();
			this.reset();
		}, (error) =>{

		})

		let carryBagObj={

			"offerId" :this.User.offerId,
			"offerImage":"image_url",
			"offerTitle" :this.offerTitle,
			"offerOriginalPrice" :this.originalPrice,
			"offerDiscount" :this.discount,
			"offerValidity" :this.offerValidity,
			"vendorId":this.User.userId

		}
		this.addOfferService.putOffersInCarryBag(carryBagObj).subscribe((res) =>{
			this.getOffers();
			this.reset();
		}, (error) =>{

		})

	}

	addOffer(){
		let time = "T"+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds()+"Z";
		this.obj={
			"userId"  :this.offers[0].userId,
			"offerTitle" :this.offerTitle,
			"offerValidity" :this.offerValidity+time,
			"dateOfAnnouncement" :this.offers[0].dateOfAnnouncement,
			"address" :this.offers[0].address,
			"offerDescription" :this.offerDescription,
			"originalPrice" :this.originalPrice,
			"discount" :this.discount,
			"offerRating" :0,
			"offerCategories" :this.offerCategories,
			"offerTerms" :this.offerTerms,
			"keywords" :this.keywords
		}
		console.log(this.obj);
		this.addOfferService.addNewOffer(this.obj).subscribe((res) =>{
			this.getOffers();
			console.log("Success:");
			console.log(res);
		}, (error) =>{
			console.log("Error:");
			console.log(error);
		})
	}
couponValidate()
{

	this.addOfferService.couponValidateService(this.coupon).subscribe((res) =>{

		debugger
		let couponData = res;
		//alert(couponData);
		if(couponData==null) {
			alert("wrong coupon entered");
		}
		else {
			let obj = {
				"couponId" : couponData.couponId,
				"userId" : couponData.userId,
				"offerId" : couponData.offerId,
				"rating" : couponData.rating,
				//"feedback" : couponData.feedback,
				"vendorValidationFlag" : true
			}

			this.addOfferService.changeFlag(obj).subscribe((res) =>{
				let responseMessage = res;
				alert(responseMessage);


			}, (error) =>{

			})
		}

	}
	, (error) =>{console.log("error");
})
}



}
