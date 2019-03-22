import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './Users/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userauth:UserAuthService) { }
  get isLoggedIn():boolean{
    return this._userauth.isLoggedIn;
  }
  logOut(){
    this._userauth.logout();
  }
  ngOnInit() {
  }

}
