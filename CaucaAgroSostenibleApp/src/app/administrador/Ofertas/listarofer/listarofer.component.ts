import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-listarofer',
  templateUrl: './listarofer.component.html',
  styleUrls: ['./listarofer.component.css']
})
export class ListaroferComponent implements OnInit {

  ofertas!:Oferta[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarOfertas();
  }

  listarOfertas(){
    this.service.getOfertas()
    .subscribe(data=>{
      this.ofertas=data;
    })
  }

  agregarOferta(){
    this.router.navigate(["agregarofer"]);
  }

  actualizarOferta(oferta:Oferta){
    localStorage.setItem("idOferta",oferta.idOferta.toString());
    this.router.navigate(["editarofer"]);
  }

  eliminarOferta(oferta:Oferta){
    this.service.deleteOferta(oferta).subscribe(data =>{
      this.ofertas = this.ofertas.filter(p=>p!==oferta);
    })
  }

}
