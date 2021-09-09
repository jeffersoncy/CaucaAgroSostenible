export class Inversionista{
    id:number;
    nombre: String;
    rutaimg: String;
    descripcion: String;
    correo: String;
 
    compareTo(invers:Inversionista) : boolean{
        if(invers.nombre == this.nombre && invers.rutaimg == this.rutaimg && invers.descripcion == this.descripcion && invers.correo == this.correo){
            return true;
        }
        return false;
    }
}