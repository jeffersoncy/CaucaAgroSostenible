export class Pedido{
    id:number;
    nomproducto:string;
    precio:number;
    cantidad:number;

    constructor(id:number,nomproducto:string, precio:number, cantidad:number){
        this.id=id;
        this.nomproducto=nomproducto;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}