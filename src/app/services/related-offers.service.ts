import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RelatedOffersService {

  constructor(private http : Http) { }
  public results:any

  private headers = new Headers({ 'Content-Type': 'application/json'});

  public getUrl="http://localhost:9005/subscribe/get";//if http is not given cross origin error will come
  getOffers(){

  this.results=this.http.get(this.getUrl)
    .map(data=> data.json(), error=>this.handleError(error));
    return this.results;
  }

   private handleError(error: Response){
     console.log("error in getting data from database");
     return Observable.throw(error.statusText);
   }

}

