// ecma <5
var numero = 12
var numero2 = 100
// ecma >6

const distancia = 40

// numericos
let dia = 100

// string
let nombre = 'Angelo'
let telefono = '55125365125'

// bool 

let valido = true

// operadores
// + - * / % 

// console.log(numero + numero2)

let resultado = numero + numero2

// console.log(resultado)

// reasignacion de variables
let x = 100
// x = x + 50
x += 50

let name1 = 'angelo'
let lastName = 'luna'
let fullName = name1 + " " + lastName

// console.log(fullName)

// estructuras de control
let edad = 12
let password = 'gatitos13'

// console.log(password.length)
// console.log(typeof edad)
// console.log(typeof password)

// if (password.length > 7) {
//     console.log('Continuar')
//     if (edad > 17) {
//         console.log('bienvenido caballere')
//     } else {
//         console.log('nariz de perro gris')
//     }
// } else {
//     console.log('la contrasena debe contener al menos 8 caracteres')
// }

// papel, piedra, tijera
// let jugador1 = 'papel'
// let jugador2 = 'piedra'

// console.log("jugador1 elige:", jugador1)
// console.log("jugador2 elige:", jugador2)

// if (jugador1 === 'papel') {
//     if(jugador2 === 'tijera') {
//         console.log('gana jugador 2')
//     }
//     if (jugador2 === 'papel') {
//         console.log('empate')
//     }
//     if (jugador2 === 'piedra') {
//         console.log('gana jugador 1')
//     }
// }

// if (jugador1 === 'piedra') {
//     if(jugador2 === 'tijera') {
//         console.log('gana jugador 1')
//     }
//     if (jugador2 === 'papel') {
//         console.log('gana jugador 1')
//     }
//     if (jugador2 === 'piedra') {
//         console.log('empate')
//     }
// }

// if (jugador1 === 'tijera') {
//     if(jugador2 === 'tijera') {
//         console.log('empate')
//     }
//     if (jugador2 === 'papel') {
//         console.log('gana jugador 1')
//     }
//     if (jugador2 === 'piedra') {
//         console.log('gana jugador 2')
//     }
// }

// variables complejas

// arreglos
let generos = ['accion', 'aventura', 'comedia', 'ciencia ficción']
generos.push('romance')
let favoritos = generos.slice(0, 2)
// console.log(  favoritos   )
// objetos
let persona = {
    nombre: 'Angelo',
    apellido: 'luna',
    edad: 31,
    bandasFavoritas: ['muse', 'billie', 'alabama shakes'],
    direccion: {
        calle: 'setubal',
        exterior: '13',
        estado: 'Puebla'
    }
}

console.log(  persona.direccion.estado   )
// funciones