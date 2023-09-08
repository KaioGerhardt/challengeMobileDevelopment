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

  constructor(private navCtrl: NavController, private CalendarService: CalendarService) { 
    this.newEvent.date = new Date()
  }
  today: Date = new Date();

  newEvent: CalendarEvents = new CalendarEvents();

  ngOnInit() {
  }

  cadastrarEvento() {
    // Lógica para cadastrar o evento (pode ser uma chamada a um serviço, etc.)

    console.log("dataa -> ", this.newEvent);
    this.CalendarService.postEvent(this.newEvent).subscribe(
      response => {
        console.log("response -> ", response);
      }
    )

    // Após o cadastro, redireciona para a página do calendário ou outra página desejada
    // this.navCtrl.navigateBack('/calendario');
  }

}
