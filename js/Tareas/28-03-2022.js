/*Tarea 1
Obtener un número aleatorio entre 1 y 100

Calcular su raíz cuadrada y mostrar en consola el resultado

Elevarlo a la quinta potencia y mostrar en consola el resultado */


let numeroAleatorio = Math.ceil(Math.random() * 100);
let raiz = Math.sqrt(numeroAleatorio); 
let numeroDecimal = parseFloat(raiz.toFixed(2)); 
let nroQuintaPotencia = (Math.pow(numeroAleatorio,5)); //usamos la funcíon para elevar el numero aleatorio obtenido a la quinta potencia

console.log(
  `La raiz cuadrada del número ${numeroAleatorio} es de ${raiz}`
);

console.log(`El numero aleatorio ${numeroAleatorio} elevado a la quinta potencia es: ${nroQuintaPotencia}`);

/*Tarea 2
Según la siguiente lista de números: 120,250,78,96,-38,45.72,1450,2380
Mostrar en consola el menor
Mostrar en consola el mayor*/

console.log(
    `El número mínimo de la lista es ${Math.min( //a partir de la lista, devuelve el menor 
        120,250,78,96,-38,45.72,1450,2380
    )}`
  );

  console.log(
    `El número máximo de la lista es ${Math.max( //a partir de la lista, devuelve el mayor
        120,250,78,96,-38,45.72,1450,2380
    )} `
  );

/*Tarea 3
Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados:
45.895025
56.788789
78.413582 */

let numero1 = 45.895025;
console.log(parseFloat(numero1.toFixed(2))); //numero redondeado con 2 decimales

let numero2 = 56.788789;
console.log(parseFloat(numero2.toFixed(2)));

let numero3 = 78.413582;
console.log(parseFloat(numero3.toFixed(2)));