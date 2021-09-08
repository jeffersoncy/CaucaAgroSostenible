import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editarorg',
  templateUrl: './editarorg.component.html',
  styleUrls: ['./editarorg.component.css']
})
export class EditarorgComponent implements OnInit {

  organizacion: Organizacion = new Organizacion;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idOrganizacion");
    this.service.getOrganizacionByID(+id).subscribe(data => {
      this.organizacion = data;
    })
  }

  actualizarOrganizacion(organizacion: Organizacion) {
    this.service.editOrganizacion(organizacion).subscribe(data => {
      try {
        this.organizacion = data;
        alert("Organizacion actualizada de forma correcta");
        this.router.navigate(["listarorg"]);
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
    this.router.navigate(["listarorg"]);
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
