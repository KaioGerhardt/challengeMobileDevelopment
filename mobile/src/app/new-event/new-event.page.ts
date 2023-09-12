import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CalendarEvents } from 'src/model/CalendarEvents';
import { CalendarService } from 'src/services/calendar.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  constructor(private navCtrl: NavController, private CalendarService: CalendarService) { }
  today: Date = new Date();

  newEvent: CalendarEvents = new CalendarEvents();

  ngOnInit() {
  }

  cadastrarEvento() {
    let resultCreate = null;
    this.CalendarService.postEvent(this.newEvent).subscribe(
      response => {
        console.log("response -> ", response);
      }
    )

    if(resultCreate){
      this.navCtrl.navigateBack('/calendario');
    }
  }

}
