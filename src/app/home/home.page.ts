import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { IonicModule } from '@ionic/angular';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, IonicModule/* LottieComponent */],
})
export class HomePage {
  constructor(private router: Router) {}
  mascotaAnimation: AnimationOptions = {
    path: 'assets/animations/mascota.json',
    renderer: 'svg',
    autoplay: true,
    loop: true,
  };

  ngOnInit() {
    // this.iniciarTour();
  }

  iniciarTour() {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'custom-shepherd',
        scrollTo: false,
        cancelIcon: { enabled: true }
      }
    });

    tour.addStep({
      id: 'paso1',
      text: '¡Hola! Soy tu asistente. ¿Cómo te llamas?',
      classes: 'test',
      attachTo: {
        element: '.mascota-container',
        on: 'top-end'
      },
      buttons: [{ text: 'Siguiente', action: tour.next }]
    });

    tour.addStep({
      id: 'paso2',
      text: 'Haz clic en "Siguiente" para continuar.',
      attachTo: {
        element: '.btn-siguiente',
        on: 'top-end'
      },
      buttons: [{ text: 'Finalizar', action: tour.complete }]
    });

    tour.start();
  }

  continuar() {
    console.log('Usuario hizo clic en Siguiente');
  }

  redirecTo(){
    console.log('que paso');
    
    const activeEl = document.activeElement;
    if (activeEl instanceof HTMLElement) {
      activeEl.blur(); // ✅ Quita el foco sin error de TypeScript
      this.router.navigate(['info']);
    }
  }
}
