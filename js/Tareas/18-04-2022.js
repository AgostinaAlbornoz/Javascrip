/*Ejercicios para practicar la lógica de lo visto hasta ahora en el módulo 2*/

/*1) Solicita un nombre, la edad y nuestra por consola el mensaje "Hola ___, tienes ___ años y el año que viene tendrás ___ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings.*/

/*let nombre = prompt("Ingrese un nombre:");
let edad = parseInt(prompt("Ingrese un nombre:"));
console.log("hola", nombre,", tienes", edad, "años y el año q viene tendrás", edad+1, "años");*/

/*2) Escribe un programa que pueda calcular el área de 2 figuras geométricas: triangulo y rectángulo. En primer lugar pregunta
de qué figura se quiere calcular el área, después solicita los datos
que necesites para calcularlo. Utiliza switch para pedir los datos según la figura.

triangulo = b * h/2
rectangulo = b * h
*/
/*

  let figura = prompt(
    "Ingrese la figura geometrica que desea calcular el area (triangulo, rectangulo)"
  );

  let base = parseFloat(prompt("Ingrese la base"));

  let altura = parseFloat(prompt("Ingrese la altura"));

  switch (figura) {
    case "triangulo":
    case "1":

      console.log(`Area del triangulo: ${(base * altura) / 2}`); 
      break;

    case "rectangulo":
        case "2":
      console.log(`Area del rectangulo: ${base * altura}`);
      break;
  
  default:
      console.log("LA figura no es valida");
    }*/



  /* 3) Solicita un número e imprime todos los números pares e impares
desde 1 hasta ese número con el mensaje "es par" o "es impar"
Por ej, si el número es 5 el resultado debería ser:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar
*

let num = parseInt(prompt("Ingrese un numero:"));
for(let i=1;i<=num;i++){
    if(i%2==0){
    console.log(`${i} - es par`);
}else{
    console.log(`${i} - es impar`);
}

}

*/

/* 4) Escribe un programa que permita ir introduciendo una serie
indeterminada de números mientras su suma no supere 50. Cuando esto
ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido.*/
/*
let suma=0;
let cont=0;
while(suma<=50){
    suma+=parseInt(prompt("Introduce un numero para añadir a la suma:"));
    cont++
}
console.log(`La suma total es de: ${suma}`);
console.log(`El total de numeros introducidos es: ${cont}`);
*/
/*5) Crea 3 arrays. El primero tendrá 5 números, el segundo array se llamará
pares y el tercero impares, ambos arrays estarán vacíos [ ]

Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10
Si el resultado es par, guarda ese número en el array de pares y si es impar en el array de impares.
Mostrar por consola: array de pares e impares
*/
/*
let num = [1,6,15,4,5];
let pares = [];
let impares = [];
let numAleatorio = math.ceil(math.random()*10);
let producto = num.map((x)=> x * numAleatorio);

for(const numero of producto){
    if(numero % 2 === 0){
        pares.push(numero);

    }
    else{
        impares.push(numero);
    }
}*/

/* 6) Tomar una lista de lenguajes de programación y mostrar en consola una lista ordenada con los nombres ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.
*/
let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];
//definir un nuevo arreglo
//ordenarlos por orden alfabético
//en mayusculas
// en una lista ordenada
//1-javascript
//2-java

function ordenarLenguajes() {
  // lenguajesOrdenados = lenguajes; NO VA
  let lenguajesOrdenados = lenguajes.slice(0);
  // lenguajesOrdenados=lenguajesOrdenados.concat(lenguajes)
  lenguajesOrdenados.sort().map(function (lenguaje, index) {
    console.log(`${index + 1} - ${lenguaje.toUpperCase()}`);
  });
}




