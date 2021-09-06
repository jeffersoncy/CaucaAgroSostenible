export class Producto{
    id:number;
    nomProducto: String;
    rutaImagen: String;
    cantidad: number;
    precio: number;

    compareTo(producto:Producto) : boolean{
        if(producto.nomProducto == this.nomProducto && producto.rutaImagen == this.rutaImagen && producto.cantidad == this.cantidad && producto.precio == this.precio){
            return true;
        }
        return false;
    }
}