export class Oferta{
    idOferta:number;
    nomOferta: String;
    precio: number;
    rutaImg: String;
    cantidad: number;
    descuento: number;

    compareTo(oferta:Oferta) : boolean{
        if(oferta.nomOferta == this.nomOferta && oferta.precio == this.precio && oferta.rutaImg == this.rutaImg && oferta.cantidad == this.cantidad && oferta.descuento == this.descuento){
            return true;
        }
        return false;
    }
}