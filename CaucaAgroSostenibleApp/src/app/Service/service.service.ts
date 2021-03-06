import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Organizacion } from '../Modelo/Organizacion';
import { Oferta } from '../Modelo/Oferta';
import { Inversionista } from '../Modelo/Inversionista';
import { Usuario } from '../Modelo/Usuario';
import { Pedido } from '../Modelo/Pedido';
import { Evento } from '../Modelo/Evento';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  UrlUser='http://localhost:8001/usuarios';
  UrlLogin='http://localhost:8001/login';
  Url='http://localhost:8002/productos';
  UrlOrg='http://localhost:8096/organizaciones';
  UrlOfer='http://localhost:8004/oferta';
  UrlInvers='http://localhost:8006/inversionista';
  UrlCarrito='http://localhost:8022/carritos';
  UrlEventos='http://localhost:8023/eventos';

  //Eventos
  listarEventos(){
    return this.http.get<Evento[]>(this.UrlEventos);
  }

  deleteEvento(evento:Evento){
    return this.http.delete<Evento>(this.UrlEventos+"/"+evento.id);
  }

  agregarEvento(evento:Evento){
    return this.http.post<Evento>(this.UrlEventos,evento);
  }


  //Carrito
  addItem(carrito:Pedido){
    return this.http.post<Pedido>(this.UrlCarrito,carrito);
  }

  obtenerTodos(){
    return this.http.get<Pedido[]>(this.UrlCarrito);
  }
  
  EliminarTodos(){
    return this.http.delete<Pedido>(this.UrlCarrito);
  }

  //Registro de usuarios

  newUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.UrlUser,usuario);
  }

  //Login

  login(usuario:Usuario){
    return this.http.post<Usuario>(this.UrlLogin+"/",usuario);
  }

  //CRUD Productos

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

  //CRUD Organizaciones

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

  //CRUD Ofertas

  getOfertas(){
    return this.http.get<Oferta[]>(this.UrlOfer);
  }

  newOferta(oferta:Oferta){
    return this.http.post<Oferta>(this.UrlOfer,oferta);
  }

  editOferta(oferta:Oferta){
    return this.http.put<Oferta>(this.UrlOfer+"/"+oferta.idOferta,oferta);
  }

  deleteOferta(oferta:Oferta){
    return this.http.delete<Oferta>(this.UrlOfer+"/"+oferta.idOferta);
  }

  getOfertaByID(id:Number){
    return this.http.get<Oferta>(this.UrlOfer+"/"+id);
  }

  //CRUD Inversionistas

  getInversionista(){
    return this.http.get<Inversionista[]>(this.UrlInvers);
  }

  newInversionista(invers:Inversionista){
    return this.http.post<Inversionista>(this.UrlInvers,invers);
  }

  editInversionista(invers:Inversionista){
    return this.http.put<Inversionista>(this.UrlInvers+"/"+invers.id,invers);
  }

  deleteInversionista(invers:Inversionista){
    return this.http.delete<Inversionista>(this.UrlInvers+"/"+invers.id);
  }

  getInversionistaByID(id:Number){
    return this.http.get<Inversionista>(this.UrlInvers+"/"+id);
  }
}
