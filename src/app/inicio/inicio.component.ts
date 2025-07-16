import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonImg],
})
export class InicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirecTo(){
    // alert('que paso');
    this.router.navigateByUrl('/home/info');
    // const activeEl = document.activeElement;
    // if (activeEl instanceof HTMLElement) {
    //   activeEl.blur(); // ✅ Quita el foco sin error de TypeScript
    //   this.router.navigate(['home/info']);
    // }
  }

}
