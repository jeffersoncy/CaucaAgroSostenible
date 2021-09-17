import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { AdministradorComponent} from './administrador/administrador.component';
import { ListarorgComponent } from './administrador/Organizaciones/listarorg/listarorg.component';
import { AgregarorgComponent } from './administrador/Organizaciones/agregarorg/agregarorg.component';
import { EditarorgComponent } from './administrador/Organizaciones/editarorg/editarorg.component';
import { ListaroferComponent } from './administrador/Ofertas/listarofer/listarofer.component';
import { EditaroferComponent } from './administrador/Ofertas/editarofer/editarofer.component';
import { AgregarInversComponent } from './administrador/Inversionistas/agregarinvers/agregarinvers.component';
import { EditarInversComponent } from './administrador/Inversionistas/editarinvers/editarinvers.component';
import { ListarInversComponent } from './administrador/Inversionistas/listarinvers/listarinvers.component';
import { AgregaroferComponent } from './administrador/Ofertas/agregarofer/agregarofer.component';
import { HomeComponent } from './cliente/home/home.component';
import { OrganizacionesComponent } from './cliente/organizaciones/organizaciones.component';
import { OfertasComponent } from './cliente/ofertas/ofertas.component';
import { InversionistasComponent } from './cliente/inversionistas/inversionistas.component';
import { EventosComponent } from './cliente/eventos/eventos.component';
import { RegistroComponent } from './cliente/registro/registro.component';

const routes: Routes = [
  {path:"listar", component:ListarComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar", component:EditarComponent},
  {path:"administrador", component:AdministradorComponent},
  {path:"listarorg", component:ListarorgComponent},
  {path:"agregarorg", component:AgregarorgComponent},
  {path:"editarorg", component:EditarorgComponent},
  {path:"listarofer", component:ListaroferComponent},
  {path:"editarofer", component:EditaroferComponent},
  {path:"agregarofer", component:AgregaroferComponent},
  {path:"home", component:HomeComponent},
  {path:"agregarinvers", component:AgregarInversComponent},
  {path:"editarinvers", component:EditarInversComponent},
  {path:"listarinvers", component:ListarInversComponent},
  {path:"vistaorganizaciones", component:OrganizacionesComponent},
  {path:"vistaofertas", component:OfertasComponent},
  {path:"vistainversionistas", component:InversionistasComponent},
  {path:"vistaeventos", component:EventosComponent},
  {path:"vistaregistros", component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
