import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[ AuthorizationService ]
})
export class UserComponent implements OnInit {

  public userList;
  public login;
  public userInfo;
  public role;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorizationService: AuthorizationService
    ) { }

  ngOnInit() {
    /*let id = this.route.snapshot.params['id'];
    this.userList=id;*/
    this.route.paramMap.subscribe(params => {
      this.userList = params.get('param');
      this.isLogin();
    });
  }

  go(idSelected) {
    this.router.navigate(['/userprofile',idSelected])
  }

  isLogin(){
    this.login = this.authorizationService.isLogin();
    this.getUserId();
  }

  getUserId() {
    this.authorizationService.getUserId().subscribe((res) =>{
      this.userInfo = res.text().split(',');
      this.role = this.userInfo[1];
    }, (error) =>{
    })
  }
}
