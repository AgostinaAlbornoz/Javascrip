//string
let nombre='Eugenia'
let apellido = 'Perez'

let frase= '        Bienvenidos a la clase  '

//cuanto caracteres tienen los string
console.log("El nombre tiene:", nombre.length,"caracteres");
console.log(apellido.length);
console.log(frase.length);

//como quitar los espacios en blanco adelante y atras
console.log(frase.trim().length);

//mayusculas
console.log(apellido.toUpperCase());

//minuscula
console.log(nombre.toLowerCase());
//extraer una letra
console.log(frase.charAt(10)); //extrae solo la letra de esa posicion
console.log(frase.substring(0,3)); //comenza en la poscion cero y tomame las 3 primeras letras

console.log(nombre);
console.log(nombre.substring(15)); //extrae desde la posicion 15

//separar letras
console.log(apellido.split("")); //separa letra por letra con un arreglo
console.log(apellido.split(" "));//separa cada palabra en un arreglo

let texto="Hola-que-asi";
let arregloTexto = console.log(texto.split("-")); //separar donde hay guiones

console.log(arregloTexto.join(" ")); //separa donde hay guiones

//ultima letra de una palabra o frase
console.log(apellido.charAt(apellido.length - 1));

//tarea
let palabra = "marmota";

//pasar a mayuscula
//pasar a minuscula
//capitalizar una palabra (la primera letra este en mayuscula)

let nom = "agostina"

//mayuscula
console.log(nom.toUpperCase());

//minuscula
console.log(nom.toLowerCase());

