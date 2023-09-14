import { Component, OnInit } from '@angular/core';
import { Users } from 'src/model/Users';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  user: Users = new Users('', '');

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  createUser(){
    let userData = this.user;

    this.LoginService.newUser(userData).subscribe(
      response => {
        console.log("reponse");
      }
    )
  }

}
