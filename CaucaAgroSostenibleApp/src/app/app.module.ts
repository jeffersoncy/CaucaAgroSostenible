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
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './cliente/home/home.component';
import { AgregarInversComponent } from './administrador/Inversionistas/agregarinvers/agregarinvers.component';
import { EditarInversComponent } from './administrador/Inversionistas/editarinvers/editarinvers.component';
import { ListarInversComponent } from './administrador/Inversionistas/listarinvers/listarinvers.component';
import { OrganizacionesComponent } from './cliente/organizaciones/organizaciones.component';
import { OfertasComponent } from './cliente/ofertas/ofertas.component';
import { InversionistasComponent } from './cliente/inversionistas/inversionistas.component';
import { EventosComponent } from './cliente/eventos/eventos.component';
import { RegistroComponent } from './cliente/registro/registro.component';

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
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AgregarInversComponent,
    EditarInversComponent,
    ListarInversComponent,
    OrganizacionesComponent,
    OfertasComponent,
    InversionistasComponent,
    EventosComponent,
    RegistroComponent
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
