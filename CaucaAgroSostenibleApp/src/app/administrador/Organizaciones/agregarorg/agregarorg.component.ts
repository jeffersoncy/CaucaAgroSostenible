import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-agregarorg',
  templateUrl: './agregarorg.component.html',
  styleUrls: ['./agregarorg.component.css']
})
export class AgregarorgComponent implements OnInit {

  public previsualizacion:string;
  public ruta:string;
  organizacion:Organizacion = new Organizacion;
  public archivo: any = []
  errores?:Error[];

  constructor(private service:ServiceService, private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void { 
  }

  guardar(){
    this.service.newOrganizacion(this.organizacion).subscribe(data=>{
      if (this.organizacion.compareTo(data)) {
        this.organizacion = data;
        alert("Organización añadida correctamente");
        this.router.navigate(["listarorg"]);
      }else{
        alert("Error al añadir la organización");
        this.router.navigate(["listarorg"]);
      }
    });
  }

  capturarFile(event):any{
    alert("Imagen agregada correctamente");
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.organizacion.rutaimagen = this.organizacion.rutaimagen.slice(12);
  }

  atras(){
    this.router.navigate(["listarorg"]);
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
