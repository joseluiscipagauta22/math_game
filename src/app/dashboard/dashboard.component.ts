import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { IonicModule } from '@ionic/angular';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonButton]
})
export class DashboardComponent  implements OnInit {

  operaciones = [
    {id: '1', nombre: 'suma'},
    {id: '2', nombre: 'resta'},
    {id: '3', nombre: 'multiplicacion'},
    {id: '4', nombre: 'divicion'},
  ]


  constructor() { }

  ngOnInit() {}

}
