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
import { CarritoComponent } from './cliente/carrito/carrito.component';
import { AgregarEventoAdminComponent } from './administrador/Eventos/agregar-evento-admin/agregar-evento-admin.component';
import { ListarEventoAdminComponent } from './administrador/Eventos/listar-evento-admin/listar-evento-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

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
    RegistroComponent,
    CarritoComponent,
    AgregarEventoAdminComponent,
    ListarEventoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD01ZoVUq6YPpGV3tjGJxX5D6LcbFvQo58'
    }),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent,EventosComponent]
})
export class AppModule { }
