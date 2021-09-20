import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Modelo/Organizacion';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {

  organizaciones !:Organizacion[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listarOrganizaciones();
  }

  listarOrganizaciones(){
    this.service.getOrganizaciones()
    .subscribe(data=>{
      this.organizaciones = data;
    })    
  }
  
}
