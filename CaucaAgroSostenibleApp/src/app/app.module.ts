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
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './cliente/home/home.component';
=======
import { AgregarInversComponent } from './administrador/Inversionistas/agregarinvers/agregarinvers.component';
import { EditarInversComponent } from './administrador/Inversionistas/editarinvers/editarinvers.component';
import { ListarInversComponent } from './administrador/Inversionistas/listarinvers/listarinvers.component';
import { VerproductosComponent } from './cliente/productos/verproductos/verproductos.component';
import { CarritoComponent } from './cliente/productos/carrito/carrito.component';
>>>>>>> a2483439c641612530cd1f29c30ddd6321747681

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
<<<<<<< HEAD
    HeaderComponent,
    SidebarComponent,
    HomeComponent
=======
    EditarInversComponent,
    AgregarInversComponent,
    ListarInversComponent,
    VerproductosComponent,
    CarritoComponent
>>>>>>> a2483439c641612530cd1f29c30ddd6321747681
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
