export class Inversionista{
    idInvers:number;
    nomInvers: String;
    rutaImg: String;
    descripInvers: String;
    correoInvers: String;
 
    compareTo(invers:Inversionista) : boolean{
        if(invers.nomInvers == this.nomInvers && invers.rutaImg == this.rutaImg && invers.descripInvers == this.descripInvers && invers.correoInvers == this.correoInvers){
            return true;
        }
        return false;
    }
}