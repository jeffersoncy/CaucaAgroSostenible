import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editarofer',
  templateUrl: './editarofer.component.html',
  styleUrls: ['./editarofer.component.css']
})
export class EditaroferComponent implements OnInit {

  oferta: Oferta = new Oferta;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idOferta");
    this.service.getOfertaByID(+id).subscribe(data => {
      this.oferta = data;
    })
  }

  actualizarOferta(oferta: Oferta) {
    this.service.editOferta(oferta).subscribe(data => {
      try {
        this.oferta = data;
        alert("Oferta actualizada de forma correcta");
        this.router.navigate(["listarofer"]);
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
    this.router.navigate(["listarofer"]);
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
