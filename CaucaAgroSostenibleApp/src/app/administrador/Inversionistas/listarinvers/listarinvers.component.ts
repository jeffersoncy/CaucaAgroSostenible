import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-listarinvers',
  templateUrl: './listarinvers.component.html',
  styleUrls: ['./listarinvers.component.css']
})
export class ListarInversComponent implements OnInit {

  invers!:Inversionista[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarInvers();
  }

  listarInvers(){
    this.service.getInversionista()
    .subscribe(data=>{
      this.invers=data;
    })
  }

  agregarInvers(){
    this.router.navigate(["agregarinvers"]);
  }

  actualizarInvers(invers:Inversionista){
    localStorage.setItem("idInvers",invers.id.toString());
    this.router.navigate(["editarinvers"]);
  }

  eliminarInvers(invers:Inversionista){
    this.service.deleteInversionista(invers).subscribe(data =>{
      this.invers = this.invers.filter(p=>p!==invers);
    })
  }

}