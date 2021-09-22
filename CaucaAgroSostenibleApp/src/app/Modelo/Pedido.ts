import { Producto } from "./Producto";

export class Pedido{
    id:number;
    productos:Producto[];
    valor_pedido:number = 0

    constructor(){
        this.productos = new Array;
    };

    private getPositionProducto(idProducto:number):number{
        for (let index = 0; index < this.productos.length; index++) {
            if(this.productos[index].getid_producto() == idProducto) return index
        }
        return -1
    }

    getValorPedido():number{
        return this.valor_pedido;
    }

    getProductos(): Producto[]{
        return this.productos;
    }

    addItem(Productos:Producto){
        var position = this.getPositionProducto(Productos.getid_producto())
        if(position < 0){
            this.productos.push(Productos)
            this.valor_pedido += Productos.getprecio_producto()
        }else{
            var numberAux = this.productos[position].getid_producto() - Productos.getid_producto()
            this.productos[position].setcantidad_producto(Productos.getcantidad_producto())
            this.productos[position].setprecio_item(Productos.getprecio_producto())
            this.valor_pedido -= numberAux    
        }
    }
    getNumberItems():number{
        return this.productos.length;
    }
}