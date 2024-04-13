import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Disponibilidad agenda', url: '/disponibilidad-dia', icon: 'calendar' },
    { title: 'Agendar hora', url: '/agendar-dia', icon: 'calendar' },
  ];
  
  constructor() {}
}
