import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/Modelo/Error';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-agregarofer',
  templateUrl: './agregarofer.component.html',
  styleUrls: ['./agregarofer.component.css']
})
export class AgregaroferComponent implements OnInit {

  public previsualizacion:string;
  public ruta:string;
  public archivo: any = []
  oferta:Oferta = new Oferta;
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newOferta(this.oferta).subscribe(data=>{
      if (this.oferta.compareTo(data)) {
        this.oferta = data;
        alert("Oferta añadida correctamente");
        this.router.navigate(["listarofer"]);
      }else{
        alert("Error al añadir la oferta");
        this.router.navigate(["listarofer"]);
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
    this.oferta.rutaImg = this.oferta.rutaImg.slice(12);
  }


  atras(){
    this.router.navigate(["listarofer"]);
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
