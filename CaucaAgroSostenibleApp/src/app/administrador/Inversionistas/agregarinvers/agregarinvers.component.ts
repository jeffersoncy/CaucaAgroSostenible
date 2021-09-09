import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregarinvers',
  templateUrl: './agregarinvers.component.html',
  styleUrls: ['./agregarinvers.component.css']
})
export class AgregarInversComponent implements OnInit {

  invers:Inversionista = new Inversionista;
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newInversionista(this.invers).subscribe(data=>{
      if (this.invers.compareTo(data)) {
        this.invers = data;
        alert("Inversionista añadido correctamente");
        this.router.navigate(["listarinvers"]);
      }else{
        alert("Error al añadir el inversionista");
        this.router.navigate(["listarinvers"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listarinvers"]);
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