import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregarofer',
  templateUrl: './agregarofer.component.html',
  styleUrls: ['./agregarofer.component.css']
})
export class AgregaroferComponent implements OnInit {

  oferta:Oferta = new Oferta;
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newOferta(this.oferta).subscribe(data=>{
      if (this.oferta.compareTo(data)) {
        this.oferta = data;
        alert("Oferta añadida correctamente");
        this.router.navigate(["listarofer"]);
      }else{
        alert("Error al añadir la oferta");
        this.router.navigate(["listarofer"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listarofer"]);
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
