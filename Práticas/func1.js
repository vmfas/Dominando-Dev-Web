function imprimirSoma(a, b) {
    return a + b
}

console.log(imprimirSoma(2, 3))

function soma(a, b = 5) {
    return a + b
}

console.log(soma(5))
console.log(soma(1, 2))