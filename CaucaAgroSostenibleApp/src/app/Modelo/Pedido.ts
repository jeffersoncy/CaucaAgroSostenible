export class Pedido{
    nomproducto:string;
    precio:number;
    cantidad:number;
    valortotal:number;
    
    constructor(nomproducto:string, precio:number, cantidad:number){
        this.nomproducto=nomproducto;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}