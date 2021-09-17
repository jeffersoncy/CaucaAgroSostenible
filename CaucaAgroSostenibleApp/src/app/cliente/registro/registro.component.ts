import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Error } from 'src/app/Modelo/Error';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:Usuario = new Usuario;
  errores?:Error[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.newUsuario(this.user).subscribe(data=>
      {
        alert("Registro completado");
        localStorage.setItem("nameuser",this.user.nameuser);
        localStorage.setItem("role","user");
        window.location.reload();
        this.router.navigate(["home"]);
    });
  }
 
  atras(){
    this.router.navigate(["home"]);
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
