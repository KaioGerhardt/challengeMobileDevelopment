import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  newEvent = {
    title: '',
    date: '',
    description: '',
  };

  ngOnInit() {
  }

  cadastrarEvento() {
    // Lógica para cadastrar o evento (pode ser uma chamada a um serviço, etc.)

    console.log("dataa -> ", this.newEvent);

    // Após o cadastro, redireciona para a página do calendário ou outra página desejada
    this.navCtrl.navigateBack('/calendario');
  }

}
