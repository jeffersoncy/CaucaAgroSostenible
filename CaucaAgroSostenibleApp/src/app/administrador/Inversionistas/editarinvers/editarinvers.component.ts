import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editarinvers',
  templateUrl: './editarinvers.component.html',
  styleUrls: ['./editarinvers.component.css']
})
export class EditarInversComponent implements OnInit {

  invers: Inversionista = new Inversionista;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idInvers");
    this.service.getInversionistaByID(+id).subscribe(data => {
      this.invers = data;
    })
  }

  actualizarInvers(invers: Inversionista) {
    this.service.editInversionista(invers).subscribe(data => {
      try {
        this.invers = data;
        alert("Inversionista actualizado de forma correcta");
        this.router.navigate(["listarinvers"]);
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
    this.router.navigate(["listarinvers"]);
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