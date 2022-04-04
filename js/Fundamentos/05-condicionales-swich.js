//fiesta
//--------
//Solo puede entrar un mayor de edad osea edad >= 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

// let edad = 15;
// let tutor = true;

// if (edad >= 18) {
//   console.log("Bienvenido a la fiesta 🤩");
// } else if (tutor) {
//   console.log("Podés entrar, pero no te separes de tu tutor 🤔");
// } else {
//   console.warn("Es menor de edad, no puede entrar 😞");
// }

// if (edad >= 18 || tutor) {
//   console.log("Bienvenido a la fiesta 🤩");
// } else {
//   console.warn("Es menor de edad, no puede entrar 😞");
// }

//Switch
// switch (variable) {
//   case 10:
//     //accion
//     break;
//     case 20:
//       //accion
//       break;

//   default:
//     //mensaje
//     break;
// }

// Se nos pide hacer una aplicación para una verdulería que segun la fruta ingresada nos devuelva el precio del kilo
// let fruta = "kiwi";
// let fruta = prompt("Ingrese la fruta que desea consultar");

// switch (fruta) {
//   case "manzana":
//     console.log("El precio del kilo de manzana es de $350");
//     break;
//   case "naranja":
//     console.log("El precio del kilo de naranja es de $180");
//     break;
//   case "banana":
//     console.log("El precio del kilo de banana es de $200");
//     break;
//   case "pomelo":
//   case "mango":
//     console.log("El precio del kilo de pomelo o mango es de $300");
//     break;

//   default:
//     console.log(`Lo siento, no disponemos de ${fruta} en stock`);
//     break;
// }

// Hacer una aplicación que nos devuelva un mensaje diciendo que día de la semana es
// */

// let dia = new Date().getDay();

// switch (dia) {
//   case 0:
//     console.log("Hoy es Domingo 🤩");
//     break;
//   case 1:
//     console.log("Hoy es Lunes 🥱");
//     break;
//   case 2:
//     console.log("Hoy es Martes 😐");
//     break;
//   case 3:
//     console.log("Hoy es Miércoles 🙂");
//     // document.write("Hoy es Miércoles 🙂");
//     // alert("Hoy es Miércoles 🙂");

//     break;
//   case 4:
//     console.log("Hoy es Jueves 🤓");
//     break;
//   case 5:
//     console.log("Hoy es Viernes 😎");
//     break;
//   case 6:
//     console.log("Hoy es Sábado 🤪");
//     break;
// }

let resultado = 0;
let elemento = "Que vamos a hacer después";

switch (true) {
  case elemento >= 10:
    console.log("Soy muy bueno usando switch");
    break;
  case elemento < 10 && elemento > 0:
    resultado = Math.pow(elemento, 2);
    console.log(`El número ${elemento} elevado al cuadrado es de ${resultado}`);
    break;
  case elemento <= 0:
    resultado = elemento + elemento;
    console.log(
      `El número ${elemento} sumado consigo mismo es de ${resultado}`
    );
    break;

  default:
    console.error("No sos tan bueno que digamos");
    break;
}

// Se nos pide hacer un programa donde el usuario ingrese dos números y la operación a realizar. Según la operación (suma, resta, multiplicación y división) devolver en consola el resultado

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

if (isNaN(num1) || isNaN(num2)) {
  console.error(
    "Alguno de los valores ingresados no es válido, vuelva a ingresar los valores"
  );
} else {
  let operacion = prompt(
    "Ingrese la operación a realizar (suma, resta, multiplicacion, division)"
  );

  switch (operacion) {
    case "suma":
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);

      break;
    case "resta":
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);

      break;
    case "multiplicacion":
    case "x":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);

      break;
    case "division":
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);

      break;

    default:
      console.warn("La operación ingresada no es válida");
      break;
  }
}
