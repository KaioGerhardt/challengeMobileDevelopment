import { Component, OnInit } from '@angular/core';
import { Users } from 'src/model/Users';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Users = new Users('', '');

  constructor(private LoginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    let jwt = sessionStorage.getItem('jwtToken');
    if (jwt != null) {
      this.router.navigate(['/calendar']);
    }
  }

  login() {
    let userData = this.user;

    this.LoginService.login(userData).subscribe(
      response => {
        if (response.isLoged) {
          sessionStorage.setItem('jwtToken', response.token);
          this.router.navigate(['/calendar']);
        }
      },
      error => {
        if (error.status == 401) {
          alert("Credenciais inválidas");
        }
      }
    );

  }
}
