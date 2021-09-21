import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/Modelo/Oferta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas!:Oferta[];

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

}
