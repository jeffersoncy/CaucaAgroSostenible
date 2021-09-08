import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Organizacion } from '../Modelo/Organizacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8002/productos';
  UrlOrg='http://localhost:8096/organizaciones';
  
  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  newProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  editProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.id);
  }

  getProductByID(id:Number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }

  getOrganizaciones(){
    return this.http.get<Organizacion[]>(this.UrlOrg);
  }

  newOrganizacion(organizacion:Organizacion){
    return this.http.post<Organizacion>(this.UrlOrg,organizacion);
  }

  editOrganizacion(organizacion:Organizacion){
    return this.http.put<Organizacion>(this.UrlOrg+"/"+organizacion.idOrganizacion,organizacion);
  }

  deleteOrganizacion(Organizacion:Organizacion){
    return this.http.delete<Organizacion>(this.UrlOrg+"/"+Organizacion.idOrganizacion);
  }

  getOrganizacionByID(id:Number){
    return this.http.get<Organizacion>(this.UrlOrg+"/"+id);
  }


}
