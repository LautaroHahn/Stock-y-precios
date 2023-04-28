import { Combo } from "../main/combo";
import { Producto } from "../main/producto/producto";
import { ProductoSimple } from "../main/producto/productoSimple";

 var unaMoto;
 var unCasco;
 var unChaleco;
 var unGuante;
 var unPiloto;
 var comboSimple: Combo;

beforeEach (() => {
    const unaMoto = new ProductoSimple ("Moto chica de prueba", 100, 5);
    const unCasco = new ProductoSimple ("Casco" , 100, 3);
    const unChaleco = new ProductoSimple ("Chaleco", 300, 6);
    const unGuante = new ProductoSimple ("Guante", 100, 10);
    const unPiloto = new ProductoSimple ("Piloto", 100, 8)

    comboSimple = new Combo ("Guantes + Casco + Chaleco");
    comboSimple.agregarProducto(unGuante);
    comboSimple.agregarProducto(unChaleco);
    comboSimple.agregarProducto(unCasco);
});

test("combo vale 500", () => {
    expect(comboSimple.precio()).toBe(500);
})

test("combo tiene 3 en stock", () => {
    expect(comboSimple.stock()).toBe(3);
})
