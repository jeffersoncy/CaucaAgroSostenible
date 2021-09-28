import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editarorg',
  templateUrl: './editarorg.component.html',
  styleUrls: ['./editarorg.component.css']
})
export class EditarorgComponent implements OnInit {

  organizacion: Organizacion = new Organizacion;
  errores: Error[];
  bandera: boolean = false;
  public previsualizacion:String;
  public ruta:string;
  public archivo: any = []
  constructor(private service: ServiceService, private router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerDatosOrg();

  }

  obtenerDatosOrg() {
    let id = localStorage.getItem("idOrganizacion");
    this.service.getOrganizacionByID(+id).subscribe(data => {
      this.organizacion = data;
      console.log(this.organizacion.rutaimagen);
      this.previsualizacion = "../../../../assets/Organizaciones/" + data.rutaimagen;
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

  capturarFile(event):any{
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.organizacion.rutaimagen = this.organizacion.rutaimagen.slice(12);
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
