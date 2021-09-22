import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inversionista } from 'src/app/Modelo/Inversionista';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-inversionistas',
  templateUrl: './inversionistas.component.html',
  styleUrls: ['./inversionistas.component.css']
})
export class InversionistasComponent implements OnInit {

  invers!:Inversionista[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarInversionistas();
  }

  listarInversionistas(){
    this.service.getInversionista()
    .subscribe(data=>{
      this.invers=data;
      
    })
  }

}
