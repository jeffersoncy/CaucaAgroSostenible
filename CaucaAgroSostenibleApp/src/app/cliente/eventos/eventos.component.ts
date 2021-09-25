import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  title = 'My first AGM project';
  lat = 2.4453523;
  lng = -76.6136989;
  constructor() { }

  ngOnInit(): void {
  }

}
