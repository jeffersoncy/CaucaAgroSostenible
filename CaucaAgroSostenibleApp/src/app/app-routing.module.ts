import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { AdministradorComponent} from './administrador/administrador.component';

const routes: Routes = [
  {path:"listar", component:ListarComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar", component:EditarComponent},
  {path:"administrador", component:AdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
