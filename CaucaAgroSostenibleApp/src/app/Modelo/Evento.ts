export class Evento {
    id:number;
    latitud: number;
    longitud: number;
    nombre: string;
    descripcion: string;
    direccion: string;
    constructor(lat: number, long: number, nombre:string, descripcion:string, direccion:string){
        this.latitud = lat;
        this.longitud = long;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
    }
}