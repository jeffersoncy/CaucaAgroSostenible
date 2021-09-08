import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Admin/Producto/agregar/agregar.component';
import { EditarComponent } from './Admin/Producto/editar/editar.component';
import { EliminarComponent } from './Admin/Producto/eliminar/eliminar.component';
import { ListarComponent } from './Admin/Producto/listar/listar.component';

const routes: Routes = [
  {path:"listar", component:ListarComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar", component:EditarComponent},
  {path:"eliminar", component:EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
