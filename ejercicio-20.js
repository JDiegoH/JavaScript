/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------")

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`) //Impresión del objeto

console.log(typeof (usuario))
console.log(typeof (jsonUsuario))

console.log("-----------Conversión de un Objeto a JSON----------------")

//Objeto persona
const persona = {
  nombre: "Mariana",
  edad: 36,
  amigos: ["Juan", "Fernanda", "José"]
};

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona) //Impresion del json

console.log(typeof (persona))
console.log(typeof (jsonPersona))

const peliculas = `{"peliculas": [
  {
  "nombre": "Jurassic Park",
  "genero": "Ciencia Ficción",
  "añoEstreno": "1993",
  "director": "Steven Spielberg",
  "duraccion": "127"
  },
  {
  "nombre": "Predator",
  "genero": "Aventura",
  "añoEstreno": "1987",
  "director": "John McTiernan",
  "duraccion": "107"
  },
  {
  "nombre": "El señor de los anillos: El retorno del rey",
  "genero": "Aventura",
  "añoEstreno": "2003",
  "director": "Peter Jackson",
  "duraccion": "201"
  },
  {
  "nombre": "Star Wars. Episodio III: La venganza de los sith",
  "genero": "Aventura",
  "añoEstreno": "2003",
  "director": "Peter Jackson",
  "duraccion": "201"
  },
  {
  "nombre": "Alien, el octavo pasajero",
  "genero": "Ciencia Ficción",
  "añoEstreno": "1979",
  "director": "Ridley Scott",
  "duraccion": "117"
  }
  ]}`;
  
  const convertirJSON = JSON.parse(peliculas);
  console.log(convertirJSON);
  
  for (let i = 0; i < convertirJSON.peliculas.length; i++) {
  const element = convertirJSON.peliculas[i];
  console.log(element);
  }