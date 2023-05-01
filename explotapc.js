let aObjeto = `
{
"Productos" : [
{
"Nombre": "Coca-Cola",
"Marca": null,
"Valor" : {
"Valor_Compra": 3400,
"Valor_Venta": 3800
},
"Tipo": "Bebida"
}
]
}
`;

let obj = JSON.parse(aObjeto);

console.log(obj);

let cocaColaName = obj.Productos[0].Valor.Valor_Compra;

console.log(cocaColaName)

let itemToPush = {
    "Nombre": "Galletas",
    "Marca": "Festival",
    "Valor": {
        "Valor_Compra": 5400,
        "Valor_Venta": 9800
    },
    "Tipo": "Alimento",
    "Inventario": 230487
}
let item2 = obj.Productos.push(itemToPush);


console.log(obj);

console.log(obj.Productos[1].Inventario)