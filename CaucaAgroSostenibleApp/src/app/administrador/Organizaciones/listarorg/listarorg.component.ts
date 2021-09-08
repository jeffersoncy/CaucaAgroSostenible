import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-listarorg',
  templateUrl: './listarorg.component.html',
  styleUrls: ['./listarorg.component.css']
})
export class ListarorgComponent implements OnInit {

  organizaciones!:Organizacion[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarorg();
  }

  listarorg(){
    this.service.getOrganizaciones()
    .subscribe(data=>{
      this.organizaciones=data;
    })
  }

  agregarOrganizacion(){
    this.router.navigate(["agregarorg"]);
  }

  actualizarOrganizacion(Organizacion:Organizacion){
    localStorage.setItem("idOrganizacion",Organizacion.id.toString());
    this.router.navigate(["editarorg"]);
  }

  eliminarOrganizacion(Organizacion:Organizacion){
    this.service.deleteOrganizacion(Organizacion).subscribe(data =>{
      this.organizaciones = this.organizaciones.filter(p=>p!==Organizacion);
    })
  }

}
