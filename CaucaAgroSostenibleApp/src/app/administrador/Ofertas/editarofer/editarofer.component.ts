import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editarofer',
  templateUrl: './editarofer.component.html',
  styleUrls: ['./editarofer.component.css']
})
export class EditaroferComponent implements OnInit {


  public previsualizacion: String;
  public ruta: string;
  public archivo: any = []
  oferta: Oferta = new Oferta;
  errores: Error[];
  bandera: boolean = false;
  constructor(private service: ServiceService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }
 
  obtenerDatos() {
    let id = localStorage.getItem("idOferta");
    this.service.getOfertaByID(+id).subscribe(data => {
      this.oferta = data;
      this.previsualizacion = "../../../../assets/Ofertas/" + data.rutaImg;
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

  capturarFile(event):any{
    alert("Imagen agregada correctamente");
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.oferta.rutaImg = this.oferta.rutaImg.slice(12);
    console.log(this.oferta.rutaImg);
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

}
