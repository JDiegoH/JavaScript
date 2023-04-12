console.log("----------------------Asignación---------------------------")
let x=12;
let z=16;

console.log(`El valor de x es ${x} y el valor de z es ${z}`)


x++ //Incremento en una unidad al valor de x
z-- //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`)

let valorUno=true;
let valorDos=false;

//Negación: devuelve el valor contrario de una variable booleana.

console.log("Negación.", !valorUno)

//AND. Devuelve verdadero siempre y cuando las dos variables se cumplan (true).

console.log("AND.", (valorUno && valorDos))

//OR. Devuelve verdadero siempre que una variable se cumpla (true).

console.log("OR.", (valorUno || valorDos))


let a=9, 
    b=56

//Se pueden declarar varias variables utilizando una sola vez la palabra reservada let o var, separandolos por comas

let suma = a+b, 
    resta= a-b,
    multiplicacion=a*b,
    division=a/b

console.log(`El valor de la suma es ${suma}
El valor de la resta es ${resta}
El valor de la multipliacion es ${multiplicacion}
El valor de la división es ${division}`)


let mayor= a>b,
    menor= a<b,
    mayorIgual= a>=b,
    menorIgual= a<=b,
    igual= a==b,
    distinto= a!=b

console.log(`La variable ${a} es mayor que ${b}: ${mayor}
La variable ${a} es menor que ${b}: ${menor}
La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
La variable ${a} es menor o igual que ${b}: ${menorIgual}
La variable ${a} es igual que ${b}: ${igual}
La variable ${a} es distinta que ${b}: ${distinto}`)



let num1 = 5, num2 = 32, num3 = -12;

let op1 = (num1*num2)/num3, 
    op2 = (num2+num3)*num1,
    op3 = (num1/num2)-(num1+num3)

console.log(`El resultado de la operacion 1 es ${op1}`)
console.log(`El resultado de la operacion 2 es ${op2}`)
console.log(`El resultado de la operacion 3 es ${op3}`)

let modulo = a%b;

console.log(`El resutlado del modulo entre ${a} y ${b} es ${modulo}`)

let incremento2 = 5

incremento2++;
