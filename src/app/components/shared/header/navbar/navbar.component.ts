import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../../../../services/login.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
	providers:[ AuthorizationService ]
})

export class NavbarComponent implements OnInit {

	private login:boolean = false;
	private token:any;
	private userId: string;
	private user: string;
	private url: string;

	constructor(
		private router: Router,
		private authorizationService: AuthorizationService,
		private location:Location,
		private loginService: LoginService
		) {
		router.events.subscribe((data:any) => { this.url = data.url; });
	}


	ngOnInit() {
		this.isLogin();
	}

	isLogin(){
		if(localStorage.getItem("application-token")){
			console.log("Success");
			this.login = true;
		} else{
			this.login = false;
		}
		this.loginService.isLoggedin.subscribe(status => {
			this.login = status;
			this.getUserId();
		});
			this.getUserId();
	}

	logout(){
		this.authorizationService.logout();
		this.isLogin();
		this.loginService.logout();
	}

	getUserId() {
		this.authorizationService.getUserId().subscribe((res:any) =>{
			this.userId = (res.text().split(','))[2];
			this.user = (this.userId.split('@'))[0];
			console.log(this.user);
		}, (error) =>{
		})
	}

	loadUserprofile(){
		this.isLogin();
		this.router.navigate(['/user/userdetails']);
		}
}
