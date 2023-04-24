function calculator(a, b, numSqrt) {
    try {
        if (isNaN(a) || isNaN(b) || isNaN(numSqrt)) { // Si ambos no son números
            throw new Error("Por favor ingrese datos numéricos");
        } else if (b === 0) {
            throw new Error("El denominador no puede ser cero.")
        } else if (numSqrt < 0) {
            throw new Error("El número de la raíz cuadrada no puede ser negativo");
        }
    } catch (err) {
        return err.message;
    }

    let sum = `${a + b}`;
    let rest = `${a - b}`;
    let mult = `${a * b}`;
    let div = `${a / b}`;
    let pow = `${a ** b}`;
    let sqrt = Math.sqrt(numSqrt);

    let sumMessage = `La suma es ${sum},`;
    let restMessage = ` la resta es ${rest},`;
    let multMessage = ` la multiplicación es ${mult},`;
    let divMessage = ` la división es ${div},`;
    let powMessage = ` la potencia es ${pow},`;
    let sqrtMessage = ` la raíz es ${sqrt}.`;

    return `${sumMessage}${restMessage}${multMessage}${divMessage}${powMessage}${sqrtMessage}`;
}
//Todos los inputs deben ser válidos
console.log(calculator(4, 1, 'a'));