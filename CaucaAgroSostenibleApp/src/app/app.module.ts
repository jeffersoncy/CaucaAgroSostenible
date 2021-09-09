import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorComponent } from './administrador/administrador.component';
import { ListarorgComponent } from './administrador/Organizaciones/listarorg/listarorg.component';
import { AgregarorgComponent } from './administrador/Organizaciones/agregarorg/agregarorg.component';
import { EditarorgComponent } from './administrador/Organizaciones/editarorg/editarorg.component';
import { ListaroferComponent } from './administrador/Ofertas/listarofer/listarofer.component';
import { AgregaroferComponent } from './administrador/Ofertas/agregarofer/agregarofer.component';
import { EditaroferComponent } from './administrador/Ofertas/editarofer/editarofer.component';
import { VerproductosComponent } from './cliente/productos/verproductos/verproductos.component';
import { CarritoComponent } from './cliente/productos/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    AdministradorComponent,
    ListarorgComponent,
    AgregarorgComponent,
    EditarorgComponent,
    ListaroferComponent,
    AgregaroferComponent,
    EditaroferComponent,
    VerproductosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
