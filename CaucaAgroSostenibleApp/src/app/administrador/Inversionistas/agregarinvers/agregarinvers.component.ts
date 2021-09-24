import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-agregarinvers',
  templateUrl: './agregarinvers.component.html',
  styleUrls: ['./agregarinvers.component.css']
})
export class AgregarInversComponent implements OnInit {

  public previsualizacion:string;
  public ruta:string;
  invers:Inversionista = new Inversionista;
  public archivo: any = []
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newInversionista(this.invers).subscribe(data=>{
      if (this.invers.compareTo(data)) {
        this.invers = data;
        alert("Inversionista añadido correctamente");
        this.router.navigate(["listarinvers"]);
      }else{
        alert("Error al añadir el inversionista");
        this.router.navigate(["listarinvers"]);
      }
    });
  }

  atras(){
    this.router.navigate(["listarinvers"]);
  }

  capturarFile(event):any{
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivo.push(archivoCapturado);
    this.invers.rutaimg = this.invers.rutaimg.slice(12);
    console.log(this.invers.rutaimg);
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