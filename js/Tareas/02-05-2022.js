/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
    imprimeDatos() {
      document.write(`<b>------Datos del producto------</b>`);
      document.write(`<br><b>Código:</b> ${this.codigo}`);
      document.write(`<br><b>Nombre:</b> ${this.nombre}`);
      document.write(`<br><b>Precio:</b> $${this.precio}<br><br>`);
    }
  }
  
  let productos = [];/*creo el arreglo vacio para guardar productos adentro*/
  
  function agregarProducto() {
    for (let index = 0; index < 3; index++) {
      let codigo = new Date().getTime();/*genera un numero aleatorio con fecha segundos minutos*/
      let nombre = prompt("Ingrese el nombre del producto");
      let precio = prompt("Ingrese el precio del producto");
      productos.push(new Producto(codigo, nombre, precio));/*dentro del push creo un producto con esos atributos*/
    }
  }
  
  function mostrarDatos() {
    for (let i = 0; i < productos.length; i++) {
      productos[i].imprimeDatos();
    }
  }