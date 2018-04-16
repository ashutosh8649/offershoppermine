import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RelatedOffersService {

  constructor(private http : Http) { }

  public getUrl='10.151.61.121:search service port no/offers';
  getOffers(){
  	return this.http.get(this.getUrl)
  	.map(data=>data.json(),
  		(error:any)=>this.handleError(error));

  }

   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

}
