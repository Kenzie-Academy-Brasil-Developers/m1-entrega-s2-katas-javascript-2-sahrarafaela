// comece a criar a sua função add na linha abaixo
function add(a, b) {
    return a + b
}

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
    let result = 0
    for (let i = 1; i <= b; i =add(i,1)) {
        result = add(result, a)
    }
    return result
}

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let result = 1
    for (let i = 1; i <= n; i = add (i,1)) {
        result = multiply(result, x)
    }
    return result
}

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo


// descomente a linha seguinte para testar sua função

function factorial(n) {
    let resultado = 1

    for (let i = 1; i <= n; i = add (i,1)) {
        resultado = multiply(resultado, i)
    }
    return resultado
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
function fibonacci(n) {
    let fibon1 = 0
    let fibon2 = 1
    let result = 0
    // let temporaria = 0
 
    for (let i = 1; i < n;i = add (i,1)) { 
        result = add(fibon1, fibon2)
        fibon1 = fibon2
        fibon2 = result  
    }
    return result
}

// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
