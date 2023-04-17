/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, 
que para que se ejecuten se debe hacer un llamado a la función, 
independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

function estoEsUnaFuncion() {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

function saludar(nombre, edad, ciudad = "Bogota") {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad} y vivo en ${ciudad}`
}

console.log(saludar("Diego", 110,'medellin'));

//Asignación de valores por defecto a una funciones

function carrera(nombre = "desconocido", carrera = "desconocido") {
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

//carrera("Juan", "desarrollo de web")
carrera(undefined,"sistemas"); //Cuando no se agrega parametro muestra el valor asignado en la funcion





function division(a, b) {
    let c;
    if (b == 0)
        c = "error by zero"
    else
        c = a / b
    return c;
}
function resta(numeroUno, nuemroDos) {
    return numeroUno - nuemroDos;
}
function suma(a, b) {
    return a + b
}
function multiplicacion(a, b) {
    return a * b;
}

let a = 5;
let b = 10;

let op = "suma";

switch (op) {
    case "suma":
        console.log(suma(a, b))
        break;
    case "resta":
        console.log(resta(a, b))
        break;
    case "multi":
        console.log(multiplicacion(a, b))
        break;
    case "div":
        console.log(division(a, b))
        break;
    default:
        break;
}



const dolarCop = function (a) {

    let valorDolar = 0.00023;
    let conversionCop = (a * valorDolar) / 1;

    return conversionCop;
}

const copDolar = function (a) {

    let valorCop = 4424;
    let conversionDolar = (a * valorCop) / 1;

    return conversionDolar;
}

let cop = 500000;
let dolar = 30;

let convertirCopDolar = dolarCop(cop);
let convertirDolarCop = copDolar(dolar);

console.log(`La conversión de ${cop} pesos colombianos a dolar es: $${convertirCopDolar}`);
console.log(`La conversión de ${dolar} dolar a pesos colombiano es: $${convertirDolarCop} cop`);


const convertPesosADollars = (pesos) => {
    const rateChange = 4570;
    const dollars = pesos / rateChange;
    Number(dollars.toFixed(2))
    console.log(Number.parseFloat(dollars.toFixed(2)))
    return dollars.toFixed(2);
    
}


console.log(convertPesosADollars(5000))


function triangulo (a,b){
    return (a*b)/2;
}
function areaCirculo ( radio ) {
    //const PI = 3.1416;
    return (Math.PI * radio**2).toFixed(2); //x^2
}
function areaCuadrado(a,b){
    return a*b;
}

ladoa = 15;
ladob = 30;
radio = 24;

console.log(`El área de un cuadrado cuyos lados miden ${ladoa} y ${ladob} es de ${areaCuadrado(ladoa,ladob)}`)
console.log(`El área de un triangulo cuya base mide ${ladoa} y su altura es ${ladob} es de ${triangulo(ladoa,ladob)}`)
console.log(`El área de un círculo cuyo radio mide ${radio} es de ${areaCirculo(radio)}`)