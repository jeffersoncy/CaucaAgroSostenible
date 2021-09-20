import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos!:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarProductos();
    
  }

  //var cadena = data.rutaImagen.slice(12);
  //console.log(cadena);
  listarProductos(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
      
    })
    for (let index = 0; index < this.productos.length; index++) {
      this.productos[index].rutaImagen = this.productos[index].rutaImagen.slice(12);
      
    }
  }

}
