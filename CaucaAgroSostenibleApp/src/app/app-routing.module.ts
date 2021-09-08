import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { AdministradorComponent} from './administrador/administrador.component';
import { ListarorgComponent } from './administrador/Organizaciones/listarorg/listarorg.component';
import { AgregarorgComponent } from './administrador/Organizaciones/agregarorg/agregarorg.component';
import { EditarorgComponent } from './administrador/Organizaciones/editarorg/editarorg.component';

const routes: Routes = [
  {path:"listar", component:ListarComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar", component:EditarComponent},
  {path:"administrador", component:AdministradorComponent},
  {path:"listarorg", component:ListarorgComponent},
  {path:"agregarorg", component:AgregarorgComponent},
  {path:"editarorg", component:EditarorgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
