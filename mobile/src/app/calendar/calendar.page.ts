import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CalendarOptions, CalendarApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from 'src/services/calendar.service';
import { CalendarEvents } from 'src/model/CalendarEvents';
import { Router } from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventSourceFuncArg, EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, AfterViewInit {
  // @ViewChild('fullcalendar', { static: true }) fullcalendar!: FullCalendarComponent;
  @ViewChild('fullcalendar') fullcalendar!: FullCalendarComponent;
  calendarApi!: CalendarApi;
  monthCalendar!: number;
  yearCalendar!: number;

  constructor(private calendarEvents: CalendarEvents, private CalendarService: CalendarService, private router: Router) { }

  ngOnInit() {
    let jwt = sessionStorage.getItem('jwtToken');
    if (jwt == null) {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    var ionRouterOutlet = document.getElementById('ion-router-outlet');

    // Verifica se o elemento foi encontrado
    if (ionRouterOutlet) {
      // Remove o elemento do DOM
      ionRouterOutlet.remove();
    }
  }

  handleDateClick() {
    alert('date click! ')
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    height: 'auto',
    locale: 'pt-br',
    contentHeight: 'auto',
    headerToolbar:
    {
      left: '',
      center: 'title',
      right: 'prev,next'
    },
    events: this.getCalendarEvents.bind(this),
    datesSet: this.handleDatesSet.bind(this),
  };

  handleDatesSet(info: any) {
    this.calendarApi = info.view.calendar;
    const currentDate = this.calendarApi.getDate();
  
    this.monthCalendar = currentDate.getMonth() + 1; // +1 porque os meses são zero indexados
    this.yearCalendar = currentDate.getFullYear();
  }

  async getCalendarEvents(arg: EventSourceFuncArg, successCallback: (eventInputs: EventInput[]) => void, failureCallback: (error: Error) => void) {
  
    if (this.monthCalendar == undefined || this.yearCalendar == undefined) {
      const currentDate = new Date();
      this.monthCalendar = currentDate.getMonth() + 1;
      this.yearCalendar = currentDate.getFullYear();
    }
  
    try {
      const response = await this.CalendarService.getEvents(this.monthCalendar, this.yearCalendar).toPromise();
      successCallback(response.data);
    } catch (error) {
      console.error("Error fetching calendar events: ", error);
      // failureCallback(error);
    }
  }
}
