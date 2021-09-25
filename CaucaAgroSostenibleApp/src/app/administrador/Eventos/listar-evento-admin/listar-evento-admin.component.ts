import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/Modelo/Evento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-evento-admin',
  templateUrl: './listar-evento-admin.component.html',
  styleUrls: ['./listar-evento-admin.component.css']
})
export class ListarEventoAdminComponent implements OnInit {

  eventos:Evento[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.service.listarEventos()
    .subscribe(data=>{
      this.eventos=data;
    })
  }

  agregarEvento(){
    this.router.navigate(["agregareventos"]);
  }

  eliminarEvento(evento:Evento){
    this.service.deleteEvento(evento).subscribe(data => {
      this.eventos= this.eventos.filter(e=>e!==evento);
    })
  }
}
