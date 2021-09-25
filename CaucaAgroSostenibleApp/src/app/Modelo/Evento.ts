export class Evento {
    id:number;
    latitud: number;
    longitud: number;
    nombre: string;
    descripcion: string;
    constructor(lat: number, long: number){
        this.latitud = lat;
        this.longitud = long;
    }
}