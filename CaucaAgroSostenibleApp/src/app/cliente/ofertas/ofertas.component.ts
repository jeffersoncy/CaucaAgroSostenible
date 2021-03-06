import { Component,VERSION ,OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/Modelo/Oferta';
import { Pedido } from 'src/app/Modelo/Pedido';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { isQualifiedName } from 'typescript';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  name = "Angular" + VERSION.major;

  @ViewChild("inputCantidad") myNameElem: ElementRef;

  ofertas!:Oferta[];
  cantidad:number=1;
  pedidos:Pedido[];
  carrito:Pedido;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarOfertas();
  }

  getValue() {
    console.log(this.myNameElem.nativeElement.value);
  }
  
  resetValue() {
    this.myNameElem.nativeElement.value = "";
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

  agregarItem(oferta:Oferta,input):void{
    this.carrito = new Pedido(oferta.nomOferta, oferta.precio-((oferta.precio*oferta.descuento)/100), this.cantidad, "Ofertas/"+oferta.rutaImg);
    this.service.addItem(this.carrito).subscribe(data=>
      {
        this.carrito = data;
        alert("Oferta añadida al carrito");
        input.value = 1;
        this.cantidad = 1;
        //this.myNameElem.nativeElement.value = 1;
      });
    //if(this.pedido == undefined || this.pedido == null){
      //document.getElementById("miPedido").removeAttribute("disabled");
      //document.getElementById("circle").removeAttribute("disabled");
    //} 
  }

}
