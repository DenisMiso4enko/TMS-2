const person = {
    name: 'Den',
    age: 27,
    maried: false
}
console.log(Object.values(person));

function User(name, age, status = 'ofline') {
    this.name = name
    this.age = age 
    this.status = status
    this.showYear = function () {
        return 2022 - this.age
    }
}
const user1 = new User('Den', 25)
console.log(user1.showYear());




// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj) {
    let sum = 0
    for (let item of Object.values(obj)) {
        sum += item
    }
    return sum
}
  
// const sumSalaries = (obj) => {
//     let sum = 0
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     return sum
// }
console.log(sumSalaries(salaries)) // 650




// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
    name: 'John',
    age: 30,
};
const count = (obj) => Object.keys(obj).length
// const count = (obj) => {
//     let keyLenght = 0
//     for (let key in obj) {
//         keyLenght++
//     }
//     return keyLenght
// }
console.log(count(user)); // 2



// Напишите деструктурирующее присваивание, которое:
let user2 = {
    name: "John",
    years: 30
};

let { name: firstName, years: age, isAdmin = false} = user2
console.log(firstName);
console.log(age);
console.log(isAdmin);




const fabiachi = (n) => {
    let result = [0,1]
    for (let i = 2; i <= n; i++) {
        const num1 = result[i - 1]
        const num2 = result[i - 2]
        result.push(num1 + num2)
    }
    return result[n]
}
console.log(fabiachi(7));

const fib = (n) => {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(10));