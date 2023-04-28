import { Producto } from "./producto/producto";

export class Combo extends Producto {
    private productos: Array<Producto>;

    constructor (descripcion:string) {
        super(descripcion);
        this.productos = [];
    }

    public agregarProducto (producto: Producto){
        this.productos.push(producto);
    }

    public precio(): number {
        /* 
        var precioFinal = 0;
        this.productos.forEach(p => precioFinal += p.precio());
        return precioFinal;
        */
        return this.productos.reduce((precioFinal, productos) => precioFinal + productos.precio(),0);
    }

    public stock(): number {
        const productoConMenorStock = this.productos.reduce ((p1,p2) => p1.stock() < p2.stock() ? p1:p2);
        return productoConMenorStock.stock();
    }

}