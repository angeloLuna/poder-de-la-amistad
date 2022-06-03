// scope
// function suma(a, b) {
//     return a+b
// }

// const resta = (a, b) => a-b

// const total = suma(resta(10,5), suma(3,8))

// console.log(total)`

// const concat = (x, y, z) => {
//     console.log('la primer palabra es: ',x)
//     console.log('la segunda palabra palabra es: ', y)
//     console.log('la tercer palabra es: ', z)
//     return x+y+z
// }



// console.log( concat('hey','string', 'amarillo') )
// let x = 100
// const cambiarValor = () => {
//     x = x + 300
// }

// cambiarValor()
// cambiarValor()
// cambiarValor()
// cambiarValor()
// cambiarValor()
// cambiarValor()
// console.log(x)


const array = [3, 6, 8, 4, 7, 28 ,3 ,2 ,4]
const array2 = [2, 3]

const recorrerArray = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log('el numero', i+1, 'dentro de array',  'es', a[i] )
    }
}

// recorrerArray(array)
// recorrerArray(array2)

// 5

// 1*2*3*4*5

// factorial

const factorial = (num) => {
    let acum = 1
    for( let i = 1; i <= num; i++) {
        acum = acum * i
    }
    return acum
}

console.log( factorial(5) )