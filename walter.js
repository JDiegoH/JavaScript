function suma(numeros) {
    let resultado = 0;
    for (let num of numeros) {
        resultado += num;
    }
    return resultado;
}

function resta(numeros) {
    let resultado = numeros[0];
    numeros.forEach((num, index) => {
        if (index > 0) {
            resultado -= num;
        }
    });

    return resultado;
}

function multiplicacion(numeros) {
    let resultado = 1;

    for (let i = 0; i < numeros.length; i++) {
        resultado *= numeros[i];
    }
    return resultado;
}

function division(numeros) {
    let resultado = numeros[0];
    let contador = 1;

    while (contador < numeros.length) {
        resultado = resultado / numeros[contador];
        contador++;
    }
    return resultado;
}

function operar(operacion, ...numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            return `el argumento ${numeros[i]} no es númerico`;
        }
        if (numeros[i] < 1) {
            return `Error, ${numeros[i]} debe ser mayor o igual 1 `;
        }
    }
    switch (operacion) {
        case "+":
            return suma(numeros);
        case "-":
            return resta(numeros);
        case "*":
            return multiplicacion(numeros);
        case "/":
            return division(numeros);
        default:
            return "operación invalida";
    }
}
console.log(operar("*", 5, 80, 26, 18, 58, 31, 3));
console.log(operar("-", 10, 6, 7, 80, 50, 100));
console.log(operar("*", 10, 5, 3, 48, 5));
console.log(operar("/", 10, 2));