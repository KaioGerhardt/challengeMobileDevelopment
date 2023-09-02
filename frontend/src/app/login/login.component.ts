import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Users } from 'src/model/Users';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Users = new Users('', '');

  constructor(private LoginService: LoginService ){

  }

  login(){
    let userData = this.user;

    this.LoginService.login(userData).subscribe(
      response => {
        console.log("reponse request");
      }
    );
    console.log("valores -> ", this.user);

  }

}
