import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Modelo/Pedido';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
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
  modal: NgbModalRef;
  constructor(private service: ServiceService, private router: Router,public modalService:NgbModal) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.calcularvalortotal();
    //document.getElementById("miPedido").setAttribute("disabled","true");
    //document.getElementById("circle").setAttribute("disabled","true");
  }
  calcularvalortotal():number{
    let valorTotal = 0;
    this.pedidos.forEach(pedido => {
      valorTotal = pedido.precio + valorTotal;
    });
    return valorTotal;
  }

  obtenerDatos(){
    this.service.obtenerTodos().subscribe(data=>{
      this.pedidos = data;
    })
  }

  borrarLista(){
    this.service.EliminarTodos().subscribe(data =>{});
    alert("La lista esta vacía");
    this.router.navigate(["home"]);
  }

  formatoNumeros(id):number{
    let result = id.toFixed(2);
    return result;
  }
}



