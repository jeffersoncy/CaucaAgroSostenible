import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/Modelo/Pedido';
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
  cantidad:number=1;
  pedidos:Pedido[];
  carrito:Pedido;
  modal: NgbModalRef;
  constructor(private service:ServiceService, private router:Router, public modalService:NgbModal) { }

  ngOnInit(): void {
    this.listarProductos();
    
    
  }

  cerrar() {
    this.modal.close();
  }

  listarProductos(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  openModalAgregarProducto(contenido, productos:Producto){
    this.productoAux = productos;
    this.modalService.open(contenido,{size:'m', centered:true});
  }

  disminuirInput(input){
    if(input.value > 1){
      input.value--;
      this.cantidad--;
    }
  }

  aumentarInput(input){
      input.value++;
      this.cantidad++;
  }

  actualizarPrecio(input){
    if (input.value < 1){
      input.value = 1;
      this.cantidad = 1;
    }else this.cantidad = +input.value;
  }

  agregarItem(productoAux:Producto):void{
    this.carrito = new Pedido(productoAux.nomProducto, productoAux.precio * this.cantidad, this.cantidad);
    this.service.addItem(this.carrito).subscribe(data=>
      {
        this.carrito = data;
        alert("Producto añadido al carrito");
        window.location.reload();
      });
    //if(this.pedido == undefined || this.pedido == null){
      //document.getElementById("miPedido").removeAttribute("disabled");
      //document.getElementById("circle").removeAttribute("disabled");
    //} 
  }
}
