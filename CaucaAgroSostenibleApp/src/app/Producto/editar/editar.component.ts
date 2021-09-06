import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  producto: Producto = new Producto;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router) { }



  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idProducto");
    this.service.getProductByID(+id).subscribe(data => {
      this.producto = data;
    })
  }

  actualizarProducto(producto: Producto) {
    this.service.editProducto(producto).subscribe(data => {
      try {
        this.producto = data;
        alert("Producto actualizado de forma correcta");
        this.router.navigate(["listar"]);
        this.bandera = true;
      } catch (error) {
        alert("Error al actualizar: " + error);
      }
    },
      response => {
        if (this.bandera == false) {
          this.errores = response.error.errors;
        }
      }
    )
  }

  atras() {
    this.router.navigate(["listar"]);
  }

  mensajeError(formato: String): String {
    if (this.errores == undefined) {
      return "";
    }
    for (let error of this.errores) {
      if (error.field == formato) {
        return error.mensaje;
      }
    }
    return "";
  }

}
