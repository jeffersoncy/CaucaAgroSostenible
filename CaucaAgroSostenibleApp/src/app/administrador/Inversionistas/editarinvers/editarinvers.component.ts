import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editarinvers',
  templateUrl: './editarinvers.component.html',
  styleUrls: ['./editarinvers.component.css']
})
export class EditarInversComponent implements OnInit {

  public previsualizacion: String;
  public ruta: string;
  public archivo: any = []
  invers: Inversionista = new Inversionista;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let id = localStorage.getItem("idInvers");
    this.service.getInversionistaByID(+id).subscribe(data => {
      this.invers = data;
      this.previsualizacion = "../../../../assets/Inversionistas/" + data.rutaimg;
    })
  }

  capturarFile(event):any{
    alert("Imagen agregada correctamente");
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.invers.rutaimg = this.invers.rutaimg.slice(12);
    
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve ({
          base:reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })

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