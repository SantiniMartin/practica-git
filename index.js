var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Producto = /** @class */ (function () {
    function Producto(name, price) {
        this.price = price;
        this.name = name;
    }
    Producto.prototype.getPrice = function () {
        return this.price;
    };
    return Producto;
}());
var ProductoAlimenticio = /** @class */ (function (_super) {
    __extends(ProductoAlimenticio, _super);
    function ProductoAlimenticio(name, price, fechaCaducidad) {
        var _this = _super.call(this, name, price) || this;
        // guarda la fecha de caducidad
        _this.fechaCaducidad = new Date(fechaCaducidad);
        return _this;
    }
    ProductoAlimenticio.prototype.checkCaducidad = function () {
        var hoy = new Date();
        // [Completa la lógica para obtener si el producto está vencido]
        var fechaActual = hoy.toISOString().split('T')[0];
        console.log(fechaActual);
        var fechaCaducidadStr = this.fechaCaducidad.toISOString().split('T')[0];
        console.log(fechaCaducidadStr);
        return fechaCaducidadStr < fechaActual;
    };
    return ProductoAlimenticio;
}(Producto));
// Creación de la instancia
var pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-05-30");
var estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");
// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad);
