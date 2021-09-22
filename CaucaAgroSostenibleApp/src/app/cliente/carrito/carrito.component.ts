import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Modelo/Pedido';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  pedido:Pedido;
  cantidad:number = 1;
  bandera:boolean =  false;
  
  constructor(public modal:NgbModal) { }
  

  ngOnInit(): void {
    document.getElementById("miPedido").setAttribute("disabled","true");
    document.getElementById("circle").setAttribute("disabled","true");
  }

  getNumeroItems():number{
    try {
      return this.pedido.getNumberItems()
    } catch (error) {
      return 0
    }
  }



}
