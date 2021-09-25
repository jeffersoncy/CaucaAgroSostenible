import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Evento } from 'src/app/Modelo/Evento';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-evento-admin',
  templateUrl: './agregar-evento-admin.component.html',
  styleUrls: ['./agregar-evento-admin.component.css']
})
export class AgregarEventoAdminComponent implements OnInit {
  title = 'Eventos del Departamento del Cauca';
  lat = 2.4453523;
  lng = -76.6136989;

  UbicacionCentral: Evento;

  eventos:Evento[];
  evento:Evento = new Evento(0,0,"","");
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.UbicacionCentral = new Evento(this.lat,this.lng,"","");
  }

  mapClicked($event: MouseEvent){
    let coord = new Evento($event.coords.lat, $event.coords.lng,"","");
    this.eventos.push(coord);
  }

  obtenerDatos(){
    this.service.listarEventos()
    .subscribe(data=>{
      this.eventos=data;
    })
  }

}
