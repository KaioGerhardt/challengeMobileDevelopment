import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarEvents } from 'src/model/CalendarEvents';


import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [CalendarEvents],
  bootstrap: [AppComponent]
})
export class AppModule { }
