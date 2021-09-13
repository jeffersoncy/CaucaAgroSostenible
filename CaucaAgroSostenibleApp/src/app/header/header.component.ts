import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  user:Usuario = new Usuario;
  result:Usuario = new Usuario;
  errores?:Error[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.user.role = localStorage.getItem("role");
    this.user.nameuser = localStorage.getItem("nameuser");
  }

  login(parUser:Usuario){
    this.service.login(parUser).subscribe(data=>
      {
        this.user = data;
        if(this.user.role!=null){
          localStorage.setItem("nameuser",this.user.nameuser);
          localStorage.setItem("role",this.user.role);
          if(this.user.role == "ADMIN"){
            this.router.navigate(["listar"]);
          } else {
            this.router.navigate(["home"]);
          }
        }
        else{
          alert("Usuario no encontrado");
          this.router.navigate(["home"]);
        }
      }
    );
  }

  logout(){
    localStorage.setItem("role","null");
    window.location.reload();
  }

  atras(){
    this.router.navigate(["listar"]);
  }

  mensajeError(formato:String): String{
    if(this.errores == undefined){
      return "";
    }
    for(let error of this.errores){
      if(error.field == formato){
        return error.mensaje;
      }
    }
    return "";
  }

}
