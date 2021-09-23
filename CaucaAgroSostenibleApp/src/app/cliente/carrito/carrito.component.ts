import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Modelo/Pedido';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from 'src/app/Modelo/Producto';
import { Item } from 'src/app/Modelo/Item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pedidos:Pedido[];
  cantidad:number = 1;
  bandera:boolean =  false;
  producto:Producto = new Producto;
  item:Item;
  constructor(private service: ServiceService, private router: Router,public modal:NgbModal) { }

  ngOnInit(): void {
    //this.obtenerDatos();
    //document.getElementById("miPedido").setAttribute("disabled","true");
    //document.getElementById("circle").setAttribute("disabled","true");
    //this.modal.open(this.OpenModalAgregarProducto(this.producto));
  }

  OpenModalAgregarProducto(producto:Producto) {
    //this.platoAux = plato;
    //this.modal.open(contenido,{size:'m', centered:true});
  }

}



