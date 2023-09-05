import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from 'src/services/calendar.service';
import { CalendarEvents } from 'src/model/CalendarEvents';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, AfterViewInit {

  constructor(private calendarEvents: CalendarEvents, private CalendarService: CalendarService, private router: Router) { }

  ngOnInit() {
    console.log("passa aqui 2");
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
    contentHeight: 'auto',
    events: this.getCalendarEvents()
  };

  getCalendarEvents() {
    console.log("passa aaqui 1");
    this.CalendarService.getEvents().subscribe(
      response => {
        // return JSON.stringify([]);
        // return [];
      }
    );

    return [
      { title: "Teste", date: "2023-10-25" }

    ];
  }
}
