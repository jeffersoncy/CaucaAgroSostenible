import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos!:Producto[];
  productoAux: Producto;
  constructor(private service:ServiceService, private router:Router, public modal:NgbModal) { }

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
  }

  openModalAgregarProducto(contenido, productos:Producto){
    this.productoAux = productos;
    this.modal.open(contenido,{size:'m', centered:true});
  }

}
