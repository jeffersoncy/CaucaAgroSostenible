export class Producto{
    id:number;
    nomProducto: string;
    rutaImagen: string;
    cantidad: number;
    precio: number;
    tipo: string;

    compareTo(producto:Producto) : boolean{
        if(producto.nomProducto == this.nomProducto && producto.rutaImagen == this.rutaImagen && producto.cantidad == this.cantidad && producto.precio == this.precio && producto.tipo == this.tipo){
            return true;
        }
        return false;
    }

    getnom_producto():string{
        return this.nomProducto;
    }

    getid_producto():number{
        return this.id
    }

    getprecio_producto():number{
        return this.precio
    }

    getcantidad_producto():number{
        return this.cantidad
    }

    setcantidad_producto(cantidad:number){
        this.cantidad=cantidad;
    }

    setnombre_producto(nombre:string){
        this.nomProducto=nombre;
    }

    setprecio_item(cantidad:number){
        this.precio=cantidad;
    }
}