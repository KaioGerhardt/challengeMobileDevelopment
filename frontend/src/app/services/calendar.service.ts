import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = "http://localhost:4500";

  constructor(private HttpClient: HttpClient) { }

  getEvents(){
    return this.HttpClient.get<any>(this.baseUrl + '/calendarEvents');
  }
}
