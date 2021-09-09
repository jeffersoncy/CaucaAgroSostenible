import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-verproductos',
  templateUrl: './verproductos.component.html',
  styleUrls: ['./verproductos.component.css']
})
export class VerproductosComponent implements OnInit {

  productos!:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

}
