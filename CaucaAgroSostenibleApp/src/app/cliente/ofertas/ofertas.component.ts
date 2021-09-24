import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/Modelo/Oferta';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas!:Oferta[];
  cantidad:number=1;
  pedidos:Pedido[];
  carrito:Pedido;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarOfertas();
  }

  //var cadena = data.rutaImagen.slice(12);
  //console.log(cadena);
  listarOfertas(){
    this.service.getOfertas()
    .subscribe(data=>{
      this.ofertas=data;
      
    })
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

  agregarItem(oferta:Oferta):void{
    this.carrito = new Pedido(oferta.nomOferta, oferta.precio * this.cantidad, this.cantidad);
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
