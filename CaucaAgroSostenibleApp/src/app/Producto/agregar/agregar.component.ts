import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) {

  }
  producto:Producto = new Producto;
  errores?:Error[];

  ngOnInit(): void {
  }

  guardar(){
    this.service.newProducto(this.producto).subscribe(data=>{
      if (this.producto.compareTo(data)) {
        this.producto = data;
        alert("Producto añadido correctamente");
        this.router.navigate(["listar"]);
      }else{
        alert("Error al añadir el producto");
        this.router.navigate(["listar"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listar"]);
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
