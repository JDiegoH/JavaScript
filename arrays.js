let mascota = [{tipo:"Perro",nombre:"Max",age:5},{tipo:"Gato",nombre:"Sami",age:3}]
let titulos = ["id","nombre","apellido","edad","carrera","notas","perfil"]
let array = [[1,"juan","hernandez",22,"sistemas",5,"admin"],
             [2,"Norbey","Muños",30,"software",5,"profesor"],
             [3,"Alex","Rodriguez",25,"software",4.7,"estudiante"]]

console.log(mascota)
console.log(mascota.tipo)
console.log(mascota.nombre)
console.log(mascota.age)

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [41, 50, 41, 50, 50, 13];


console.log(array1.every(isBelowThreshold));
console.log(array1.some(isBelowThreshold));

map = array1.map(isBelowThreshold);
console.log(map);

filter = array1.filter(isBelowThreshold);
console.log(filter);

datos = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
console.log(datos.map(element => Array.isArray(element) ? element.length : 1 ));

