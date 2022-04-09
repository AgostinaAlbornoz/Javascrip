//Ejercicio: obtener las vocales de una frase
// let frase = prompt("Ingrese una frase");
// let vocales = "";

// for (let i = 0; i < frase.length; i++) {
//   let letra = frase.charAt(i).toLowerCase();

//   if (
//     letra === "a" ||
//     letra === "e" ||
//     letra === "i" ||
//     letra === "o" ||
//     letra === "u"
//   ) {
//     vocales += letra;
//   }
// }

// // console.log(vocales);
// console.log(
//   `La cantidad de vocales en la frase "${frase}" es de ${vocales.length}`
// );

//Arreglos o Arrays
//lista o matrices

let alumnos = ["Pablo", "Fabrizio", "Gabriela", "Lucas"];

//mostrar un elemento
alumnos[2]; //Gabriela

//mostrar el último elemento
alumnos[alumnos.length - 1];

//Concatenar elementos en un string
console.log(`Los alumnos más copados son: ${alumnos.join(", ")}`);

//Iterar los elementos de un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}

for (const alumno of alumnos) {
  console.log(`Hola soy ${alumno}`);
}

//Agregar un elemento al arreglo
alumnos.push("Daniel", "Nayru");
alumnos.unshift("Joaquin");

//Eliminar elementos del arreglo
alumnos.pop();
alumnos.shift();

//Encotrar la posición o indice de un elemento
console.log(alumnos.indexOf("Daniel"));

//Saber si un elemento existe en el arreglo
console.log(alumnos.includes("Edmundo"));

//Eliminar un elemento por su posición
let pos = alumnos.indexOf("Lucas");
alumnos.splice(pos, 1);

//eliminar varios elementos del arreglo
alumnos.splice(0, 3);

//Agregar alumnos
alumnos.push("José", "Alberto", "Juan", "Joaquin");

//Agregar elementos desde una posicion en particular
alumnos.splice(3, 0, "Franco", "Pablo");

//Reemplazar elementos en una posición
alumnos.splice(5, 2, "Edmundo", "Rarito");

//nuevo arreglo
let alumnas = ["Gabriela", "Rosita", "Nayru", "Rocio", "Dami", "Agostina"];

//concatenar arreglos
let comision = alumnos.concat(alumnas);

//Ordenar arreglo a-z
console.log(comision.sort());

//Ordene de la z-a
console.log(comision.reverse());

//Extraer en un nuevo arreglo
let ausentes = comision.slice(3, 7);

//ENIGMA UNIVERSAL
console.log(["🥚", "🐔"].sort());

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras *
- primera palabra *
- última palabra *
- las palabras colocadas en orden inverso *
- las palabras ordenadas de la a la z  *
- las palabras ordenadas de la z a la a. *
- Sacar toda esta información en consola
*/

let frase = "La sonrisa es la mejor respuesta para una mirada";

let palabras = frase.toLowerCase().split(" ");

console.log(`La cantidad de palabras es de ${palabras.length}`);
console.log(`La primera palabra es "${palabras[0]}"`);
console.log(`La última palabra es "${palabras[palabras.length - 1]}"`);
console.log(palabras.reverse());
console.log(palabras.sort());

console.log(palabras.sort().reverse());

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [23, 45, 78, 96, 145, 745];
let numero = parseInt(prompt("ingrese un número"));

if (lista.includes(numero)) {
  console.log(`El número ${numero} se encuentra en la lista 🙂`);
} else {
  console.log(`El número ingresado no está en la lista 😞`);
}