a = 5;
b = 7;

//(( a * b ) / a)*b

resultado1 = a*b;
resultado2 = resultado1 / a
resultado3 = resultado2 * b

function multiplicar(x,y){
    // [a,b,c,d,e,f]
    //
    //
    //
    return x*y;
}

resultado1 = multiplicar(a,b);
resultado2 = resultado1 / a;
resultado3 = multiplicar(resultado2,b);

arreglo = [1,2,3,4,5]
arreglo2 = ['a','b','c','d'];

imprimir_arreglo(arreglo2)

function imprimir_arreglo(x){
    for (let index = 0; index < x.length; index++) {
        console.log(x[index])
    }
}