import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/add/operator/map';

import { Login } from '../configs/login.config';

@Injectable()
export class LoginService {

  private header;

  constructor(private http: Http) {
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.header.append('Authorization',localStorage.getItem("application-token"));
  }


  loginWithEmailId(username,password){
    const options = new RequestOptions({headers: this.header});
    let body= {
      "email":username,
      "password":password
    }
    return this.http.post(Login.loginWIthId, body, options)
    .map((res:Response) => {
      localStorage.setItem("application-token",res.text());
    },
    (error: any)=>console.log("error in calling register service"));
  }

}
