import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarEvents } from 'src/model/CalendarEvents';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private baseUrl = "http://localhost:4500";

  constructor(private HttpClient: HttpClient) { }

  getEvents(month: number, year: number){
    return this.HttpClient.post<any>(this.baseUrl + '/calendarEvents', {month, year});
  }

  postEvent(parameters: CalendarEvents){
    return this.HttpClient.post<any>(this.baseUrl + '/newEvent', parameters);
  }
}
