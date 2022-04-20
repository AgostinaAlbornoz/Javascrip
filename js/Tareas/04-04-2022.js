let numero1=parseInt(prompt("Ingrese el primer numero"));
//let numero2=parseInt(prompt("Ingrese el segundo numero"));
//let numero3=parseInt(prompt("Ingrese el tercer numero"));

//6) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/*if(numero1>numero2){
prompt('El mayor es:',numero1);
}
else
{
    prompt('El mayor es:',numero2);
}*/

//7)Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*if(numero1>numero2 && numero1>numero3)
{
prompt('El mayor es:',numero1);
}
else
{
    if(numero2>numero1 && numero2>numero3)
    {
    prompt('El mayor es:',numero2);
    }
    else
    {
        if(numero3>numero1 && numero3>numero2)
        {
            prompt('El mayor es:',numero3);
        }
    }
}*/

//Escribe un programa que pida un número y diga si es divisible por 2
/*let resto = numero1 % 2;
if(resto===0){
console.log(numero1, "es divisible por 2");
}
else{
    console.log(numero1, "no es divisible por 2");
}*/

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)
/*let frase = prompt("Escribe una frase");
let cantfrase = frase.length;
let i;
for (i = 0; i < cantfrase; i++) {
if (frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u") 
{
document.write(frase.substr(i,1));
}
}*/

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
/*
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}*/

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
if (numero1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (numero1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (numero1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (numero1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}