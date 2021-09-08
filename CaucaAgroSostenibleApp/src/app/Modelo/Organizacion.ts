export class Organizacion{
    idOrganizacion:number;
    nombre: String;
    rutaimagen: String;
    ubicacion: String;
    telefono: number;

    compareTo(organizacion:Organizacion) : boolean{
        if(organizacion.nombre == this.nombre && organizacion.rutaimagen == this.rutaimagen && organizacion.ubicacion == this.ubicacion && organizacion.telefono == this.telefono){
            return true;
        }
        return false;
    }
}