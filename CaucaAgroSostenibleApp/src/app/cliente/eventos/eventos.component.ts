import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  title = 'Eventos del Departamento del Cauca';
  lat = 2.4453523;
  lng = -76.6136989;
  constructor() { }

  ngOnInit(): void {
  }

}
