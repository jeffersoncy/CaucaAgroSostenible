import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public previsualizacion:string;
  producto:Producto = new Producto;
  public archivo: any = []
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router, private sanitizer: DomSanitizer) {

  }


  ngOnInit(): void {
  }

  guardar(){
    const formularioDeDatos = new FormData();
    this.service.newProducto(this.producto).subscribe(data=>
      {
      if (this.producto.compareTo(data)) {
        //var cadena = formularioDeDatos.rutaImagen.slice(12);
        //console.log(cadena);
        this.producto = data;
        alert("Producto añadido correctamente");
        this.router.navigate(["listar"]);
      }else{
        alert("Error al añadir el producto");
        this.router.navigate(["listar"]);
      }
    });
  }
 
  atras(){
    this.router.navigate(["listar"]);
  }

  capturarFile(event):any{
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    this.archivo.push(archivoCapturado);
    console.log(event.target.files[0]);
    //data.rutaImagen = archivoCapturado;
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
