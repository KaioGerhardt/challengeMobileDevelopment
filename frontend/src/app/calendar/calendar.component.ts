import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from 'src/app/services/calendar.service';
import { CalendarEvents } from 'src/model/CalendarEvents';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  constructor(private calendarEvents: CalendarEvents, private CalendarService: CalendarService){}
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    // dateClick: this.handleDateClick.bind(this),
    events: this.getCalendarEvents(),
  };

  handleDateClick(){
    alert('date click! ')
  }

  getCalendarEvents(){
    this.CalendarService.getEvents().subscribe(
      response => {
        // return JSON.stringify([]);
        // return [];
      }
    );

    return [
      {title: "Teste", date: "2023-10-25"}

    ];
  }
}
