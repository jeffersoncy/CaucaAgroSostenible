import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CaucaAgroSostenibleApp';

  constructor(private router:Router){}
  ngOnInit(): void {
    let user = localStorage.getItem("role");
    if(user == "ADMIN") {
      this.AdminProd();
    } else {
      this.Home();
    }     
  }

  Home(){
    this.router.navigate(["home"]);
  }

  AdminProd(){
    this.router.navigate(["listar"]);
  }

  ListarOrg(){
    this.router.navigate(["listarorg"]);
  }

  ListarOfer(){
    this.router.navigate(["listarofer"]);
  }

  ListarInvers(){
    this.router.navigate(["listarinvers"]);
  }

}
