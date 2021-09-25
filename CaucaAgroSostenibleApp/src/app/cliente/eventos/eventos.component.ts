import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/Modelo/Evento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  title = 'Eventos del Departamento del Cauca';
  lat = 2.4453523;
  lng = -76.6136989;

  UbicacionCentral: Evento;

  coordenadas: Evento  [] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.UbicacionCentral = new Evento(this.lat,this.lng);
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.service.listarEventos()
    .subscribe(data=>{
      this.coordenadas=data;
    })
  }

}