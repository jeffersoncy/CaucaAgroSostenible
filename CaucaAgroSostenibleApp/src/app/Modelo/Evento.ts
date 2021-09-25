export class Evento {
    id:number;
    latitud: number;
    longitud: number;
    nombre: string;
    descripcion: string;
    constructor(lat: number, long: number, nombre:string, descripcion:string){
        this.latitud = lat;
        this.longitud = long;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}