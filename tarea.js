class Figura {

    constructor(nombre) {
        this.nombre = nombre;
    }
    perimetro() {
    }
    area() {
    }
}

class Circulo extends Figura {

    constructor(nombre, radio) {
        super(nombre)
        this.radio = radio;
    }

    perimetro() {
        return `la figura ${this.nombre} tiene un perimetro de ${(2 * Math.PI * this.radio).toFixed(4)}`
    }

    area() {
        return `la figura ${this.nombre} tiene un area de ${(Math.PI * this.radio ** 2).toFixed(4)}`
    }
}

const pan = new Circulo("circulo", 7)
console.log(pan.area())
console.log(pan.perimetro())