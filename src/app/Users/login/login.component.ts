import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: UserAuthService,
              private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      if(!userName || !password){
        alert("Please enter Username and Password");
      }
      else{
        this.authService.logIn(userName, password);
      }


      if (this.authService.redirectURL) {
        this.router.navigateByUrl(this.authService.redirectURL);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
  ngOnInit(){}

}
