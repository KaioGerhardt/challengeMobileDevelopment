import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Users } from 'src/model/Users';
import { Router } from '@angular/router';
import { CalendarEvents } from 'src/model/CalendarEvents';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Users = new Users('', '');

  constructor(private LoginService: LoginService, private router: Router){

  }

  login(){
    let userData = this.user;

    this.LoginService.login(userData).subscribe(
      response => {
        console.log("reponse request", response);
        if(response == "200"){
          console.log("tinha que ter redirecionado");
          this.router.navigate(['/calendar']);
        }
      }
    );
    console.log("valores -> ", this.user);

  }

}
