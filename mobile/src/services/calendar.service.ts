import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarEvents } from 'src/model/CalendarEvents';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = "http://localhost:4500";

  constructor(private HttpClient: HttpClient) { }

  getEvents(){
    return this.HttpClient.get<any>(this.baseUrl + '/calendarEvents');
  }

  postEvent(parameters: CalendarEvents){
    return this.HttpClient.post<any>(this.baseUrl + '/newEvent', parameters);
  }
}
