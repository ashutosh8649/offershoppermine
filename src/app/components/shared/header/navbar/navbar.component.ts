import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
	providers:[ AuthorizationService ]
})
export class NavbarComponent implements OnInit {

  login:boolean = false;
	token:any;
	userId: string;
	userInfo: any = [];

	constructor(
		private router: Router,
		private authorizationService: AuthorizationService
		) { }


	ngOnInit() {
		this.isLogin();
	}

	isLogin(){
		this.login = this.authorizationService.isLogin();
		this.getUserId();
	}

	logout(){
		this.authorizationService.logout();
		window.location.assign("/homepage");
	}

	getUserId() {
		this.authorizationService.getUserId().subscribe((res:any) =>{
			//this.userInfo = res.text().split(',');
		}, (error) =>{
		})
	}

}
