import { Component, OnInit,ViewChild } from '@angular/core';
import { CarrybagService } from '../../../services/carrybag.service';
import { AuthorizationService } from '../../../services/authorization.service';


@Component({
  selector: 'app-carrybag',
  templateUrl: './carrybag.component.html',
  styleUrls: ['./carrybag.component.css'],
  providers:[CarrybagService,AuthorizationService]

})
export class CarrybagComponent implements OnInit {
  @ViewChild('myModal')myModal;
  couponId:any;
  //userId:String="megha@gmail.com"
  currentUserId:String;
  currentOfferId:String;
  offerId:String;
  rating:number;
  feedback:String;
  obj={};
  data:any;
  flag:boolean;
  nothing:number;

  constructor(private carrybagService: CarrybagService,
  private authorizationService: AuthorizationService) { }
  priceAfterDiscount: any;
  public userInfo;
  public userId;
  public carryBagOffers=[];

  ngOnInit()
  {
  	this.getUserId();
  }

  getUserId() {
    this.authorizationService.getUserId().subscribe((res) =>{
      this.userInfo = res.text().split(',');
      this.userId = this.userInfo[2];
      this.getCarrybag();
    }, (error) =>{
    })
  }

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }




  getCarrybag() {
    this.carrybagService.getCarrybaglist(this.userId).subscribe((res) =>{
      this.carryBagOffers = res;
      console.log(res);
    }, (error) =>{console.log("error");
      })
  }
  deleteOffer(userId, offerId){
    console.log(offerId);
    this.carrybagService.deleteCarrybag(offerId,userId).subscribe((res) =>{
    	this.getCarrybag();
      }, (error) =>{
        alert(error + "deletion not working");
      })
  }


  couponGenerate(userId,offerId){
    
    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      let data=res;
 
      if(data.userId==null){
      let user=this.carryBagOffers.find(ele=>ele.offerId===offerId);
      this.couponId=Math.floor(Math.random()*100000);
      
      this.obj={
                  "couponId" :this.couponId,
                  "userId"  :user.userId,
                  "offerId" :user.offerId,
                  "vendorValidationFlag" : false,
                  "rating" :0,
                  "feedback" :null
                } 
                this.carrybagService.newCouponGenerate(this.obj).subscribe((res) =>{
  
                }, (error) =>{
          
                })
              }
              else{
                this.couponId=data.couponId;
              }
    }, (error) =>{console.log("error");
      })




          }

  addfeedback() {

    this.carrybagService.validateCoupon(this.currentUserId,this.currentOfferId).subscribe((res) =>{
      
      let data=res;
      
      if(data.feedback==null){
        let user=this.carryBagOffers.find(ele=>ele.offerId===this.currentOfferId);
        this.obj={
          "couponId" :data.couponId ,
          "userId"  :data.userId,
          "offerId" :data.offerId,
          "vendorValidationFlag" : data.vendorValidationFlag,
          "rating" :this.rating,
          "feedback" :this.feedback
        } 
        this.carrybagService.updateFeedback(this.obj).subscribe((res) =>{
    
        }, (error) =>{
    
        })
              this.rating=undefined;
              this.feedback=undefined;
      
      
      }
      else {
        alert("feedback already done");
      }

    }, (error) =>{console.log("error");
      })

  } 
  
  checkFeedbackExistence(offerId, userId) {
    this.currentOfferId=offerId;
    this.currentUserId=userId;

    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      

      let data=res;
     
      
      if(data.feedback==null&&data.vendorValidationFlag==true){
        this.myModal.nativeElement.click();
        //this.flag=true;

        }  else  {
          this.flag=false;
          alert("feedback already exists");
          }
    }, (error) =>{console.log("error");
      })
     
 //console.log(this.flag);
 

  } 

  
}
