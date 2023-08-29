import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/model/Users';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = "http://localhost:4500";

  constructor(private HttpClient: HttpClient) { }

  request(user: Users, url: String): Observable<any> {
    console.log("ta chegando na service", this.baseUrl + url);
    return this.HttpClient.post<any>(this.baseUrl + url, user);
  }

  login(user: Users): Observable<any> {
    console.log("chega no login funct");
    return this.request(user, '/login');
  }
}
