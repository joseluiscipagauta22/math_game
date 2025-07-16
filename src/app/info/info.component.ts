import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonImg, IonInput, IonItem, IonList} from '@ionic/angular/standalone';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { IonicModule } from '@ionic/angular';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  imports:[ CommonModule, IonicModule, LottieComponent]
})
export class InfoComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {}

  showAge = signal(true);
  tour: Shepherd.Tour;
  
  mascotaAnimation: AnimationOptions = {
    path: 'assets/animations/mascota.json',
    renderer: 'svg',
    autoplay: true,
    loop: true,
  };

  ngOnInit() {
    this.tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: false
      },
      scrollTo: { behavior: 'smooth', block: 'center' },
      classes: 'shepherd-theme-arrows'
    }
  });
    this.iniciarTour();
  }

  cerrarDialog(){
    this.tour.next();
    this.showAge.update(currentValue => !currentValue);
    console.log('entra', this.showAge);
  }

  
  iniciarTour() {

    this.tour.addStep({
      id: 'paso1',
      text: '¡Hola! Soy Tonny. tu nuevo amigo, ¿Cómo te llamas?',
      classes: 'test',
      attachTo: {
        element: '.miTest',
        on: 'top'
      },
      // buttons: [{ text: 'Siguiente', action: this.tour.next }]
    });

    this.tour.addStep({
      id: 'paso2',
      text: '¡ Un placer conocerte ! Cuantos años tienes ?',
      classes: 'test',
      attachTo: {
        element: '.miTest',
        on: 'top'
      },
      // buttons: [{ text: 'Siguiente', action: this.tour.next }]
    });

    this.tour.start();
  }

  redirecTo(){
    const activeEl = document.activeElement;
    if (activeEl instanceof HTMLElement) {
      activeEl.blur(); // ✅ Quita el foco sin error de TypeScript
      this.tour.cancel();
      this.router.navigate(['home/dashboard']);
    }
    // this.router.navigate(['home/dashboard']);
  }

  ngOnDestroy(): void {
    this.tour.cancel();
    // throw new Error('Method not implemented.');
  }
}
