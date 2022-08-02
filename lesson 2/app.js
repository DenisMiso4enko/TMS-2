// console.log('hello');


// console.log(Boolean('')); // false
// console.log(Boolean('sdcsdc')); // true



// // Диструкторищзация 
// let a = 3;
// let b = 5;
// [a,b] = [b,a]

// console.log(a, b)

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a,b);

// Переменные
let a = 10
a = 15

const b = 20

console.log(a)

let c
console.log(c) // undefined

// Типы данных
let number = 1 // 0, 14.5, -23, NaN, Infinity, -Infinity
let string = 'String' // ``
let boolean = true // false
let nullType = null
let undefinedType = undefined
let object = {} // [], function

let myName = 'Alexey'

console.log(typeof myName)
console.log(typeof null) // object
console.log(typeof function () {})

// Математические операторы
// +, -, /, *, **, %

let sum = 13 + 14 // 27
let newSum = sum + 10 // 37

console.log(sum, newSum)

// Преобразование типов (Числовое, Строковое, Логическое)
// Числовое
console.log(Number('12')) // 12
console.log(Number(' 14')) // 14
console.log(Number('weferg')) // NaN
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(+'120') // 120

// Строковое
console.log(String(23)) // '23'
console.log(String(true)) // 'true'

// Логическое
console.log(Boolean(-1)) // true
console.log(Boolean(12)) // true
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('Test')) // true
console.log(Boolean('   ')) // true
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean()) // false

// Неявное преобразование типов (Числовое, Строковое)
const fullName = 'Alexey' + ' ' + 'Gulo' // 'Alexey Gulo'
const d = 'Hello' + 12 // 'Hello12'

console.log(10 - '5') // 5

// TODO: Логическое lesson-2

// alert(), prompt(), confirm()
// alert(10) // string
// console.log('after alert')

// const age = +prompt('Введите ваш возраст!', 0) // string
// console.log('Ваш возраст: ', age)

// const isAdmin = confirm('Вы админ?')
// console.log(isAdmin)

// ADVANCED level, task2
let string1 = 'Hello world'
console.log(string1[2])
console.log(string1[10])



// Составное представление 


