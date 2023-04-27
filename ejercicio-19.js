const avaraible=`{
    "nombre": "arturo",
    "apellido":"martinez",
    "edad": 89,
    "hobbies": ["tocar piano", "bailar", "ver tv", "cantar"],
    "contacto": {
        "telefono": "41646165",
        "correo": "jdasdasdasd.edu.co",
        "direccion": "cra7979s#25sur"
    }
    }`
    
    
console.log(typeof(avaraible))

let aObjeto = `
{
    "productos": [
        {
            "nombre": "arroz",
            "marca": "diana",
            "valor": {
                "valor_compra": 20000,
                "valor_venta": 23000
            },
            "tipo": "alimento",
            "inventario": 10
        },
        {
            "nombre": "jabon",
            "marca": "ariel",
            "valor": {
                "valor_compra": 5452,
                "valor_venta": 6985
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "detergente",
            "marca": "suavitel",
            "valor": {
                "valor_compra": 5000,
                "valor_venta": 5300
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "Cerveza",
            "Marca": "Poker",
            "valor": {
                "valor_compra": 5000,
                "valor_venta": 10000
            },
            "Tipo": "Bebida",
            "inventario": 70
        },
        {
            "nombre": "Coca cola",
            "Marca": "PepsiXD",
            "valor": {
                "valor_compra": 3200,
                "valor_venta": 5000
            },
            "Tipo": "Bebida",
            "inventario": 80
        },
        {
            "nombre": "Aceite",
            "Marca": "Gourtmet",
            "valor": {
                "valor_compra": 10000,
                "valor_venta": 45000
            },
            "Tipo": "Bebida",
            "inventario": 2000
        },
        {
            "nombre": "Galletas",
            "Marca": "Festival",
            "valor": {
                "valor_compra": 700,
                "valor_venta": 1500
            },
            "Tipo": "Bebida",
            "inventario": 30000
        }
    ]
}
`;

let obj = JSON.parse(aObjeto);

console.log(obj);

let cocaColaName = obj.productos[0].valor.valor_compra;
console.log(cocaColaName);

for (producto of obj.productos){
    console.log(`El valor de venta del producto ${producto.nombre} es de: $ ${producto.valor.valor_venta}`)
}