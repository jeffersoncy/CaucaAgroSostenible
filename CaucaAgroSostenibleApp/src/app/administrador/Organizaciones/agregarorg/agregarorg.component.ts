import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregarorg',
  templateUrl: './agregarorg.component.html',
  styleUrls: ['./agregarorg.component.css']
})
export class AgregarorgComponent implements OnInit {

  organizacion:Organizacion = new Organizacion;
  errores?:Error[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newOrganizacion(this.organizacion).subscribe(data=>{
      if (this.organizacion.compareTo(data)) {
        this.organizacion = data;
        alert("Organización añadida correctamente");
        this.router.navigate(["listarorg"]);
      }else{
        alert("Error al añadir la organización");
        this.router.navigate(["listarorg"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listarorg"]);
  }

  
  mensajeError(formato:String): String{
    if(this.errores == undefined){
      return "";
    }
    for(let error of this.errores){
      if(error.field == formato){
        return error.mensaje;
      }
    }
    return "";
  }
}
