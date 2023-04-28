import { Producto } from "./producto";

export class ProductoSimple extends Producto {
    private _precio:number;
    private _stock:number;

    constructor (descripcion:string, precio: number, stock: number) {
        super(descripcion);
        this._precio = precio;
        this._stock = stock;
    }

    public precio(): number {
        return this._precio;
    }
    
    public stock(): number {
        return this._stock;
    }
}