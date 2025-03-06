class Producto{
    price: number;
    name: string;

    constructor(name: string, price: number){
        this.price = price;
        this.name = name;
    }

    getPrice(){
        return this.price;
    }
}


class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;
    constructor(name: string, price: number, fechaCaducidad) {
      super(name, price);
      // guarda la fecha de caducidad
      this.fechaCaducidad = new Date(fechaCaducidad);
    }
  
    checkCaducidad():boolean {
      const hoy = new Date();
      // [Completa la lógica para obtener si el producto está vencido]
      const fechaActual = hoy.toISOString().split('T')[0];
      console.log(fechaActual)
      const fechaCaducidadStr = this.fechaCaducidad.toISOString().split('T')[0];
      console.log(fechaCaducidadStr)
      return fechaCaducidadStr < fechaActual;
    }
}


class ProductoCongelado extends ProductoAlimenticio {
    temperaturaRecomendada: number;
    private margen: number;
    constructor(name: string, price: number, fechaCaducidad: string, temperaturaRecomendada: number, margen: number = 5) {
      super(name, price, fechaCaducidad);
      this.margen = margen;
      // [Tu código: Guarda  el dato temperaturaRecomendada]
      this.temperaturaRecomendada = temperaturaRecomendada;
      
    }
    estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
      
      // [Calcula si el producto está bien conservado contemplando 
      // el temperaturaRecomendada y el margen]

      if(temperaturaActual < temperaturaActual - this.margen || temperaturaActual > temperaturaActual + this.margen){
        return false;
      }

      return true;
    }
}
  

// // Creación de la instancia
// const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-05-30");

// const estaVencido = pan.checkCaducidad();
// console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// // Mostrar detalles del producto
// console.log("Nombre del Producto:", pan.name);
// console.log("Precio:", pan.getPrice());
// console.log("Fecha de Caducidad:", pan.fechaCaducidad);

// Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");
