// // function hello(message) {
// //     console.log(arguments);
// //     console.log(message);
// // }
// const sayHello = (message) => {
//     console.log(message);
// }
// const calcSum = (a,b) =>  a + b

// console.log(hello('hello'));


// // Стрелочные функции 
// const arrowFunction = () => {
//     // нету arguments 
//     // атоматический return в одну строку  
//     // Статичный контекст нету this // будет работать если создавать в конструторе 
// }



// функции обратног вызова callback
// function loadImage(url) {
//     console.log('loading....');
//     console.log('2....');
//     console.log('3...end');
// }
// function showSpiner() {
//     console.log('spiner show');
// }
// function hideSpiner() {
//     console.log('spiner hide');
// }

// function consimPassword(pass, sucssec, error) {
//     const userPass = prompt('Введите пароль')
//     if (pass == userPass) {
//         sucssec()
//     } else {
//         error()
//     }
// }
// function runSucsses() {
//     alert('пароль совпадает')
// }
// function runError() {
//     alert('пароль неверный')
// }
// console.log(consimPassword('123', runSucsses, runError));

// const myArray = [1,2,3,4,5]
// function forEachArray(arr, fun) {
//     for (let item of arr) {
//         fun(item)
//     }
// }
// forEachArray(myArray, showItem)
// function showItem(item) {
//     console.log(item);
// }


// методы макссивов 
// forEach
const numbers = [12, 0, 89, 8, 88] 
numbers.forEach((item, index) => {
    console.log(index, item);
})

//map 
const resiltMap = numbers.map((item) => {
    return item * 2
})
console.log(resiltMap);

// filter 
// const resiltFilter = numbers.filter((item) => {
//     if (item > 12) return item * 2
// })

const resiltFilter = numbers.filter(item => item >= 12).map(item => item * 2)
console.log(resiltFilter);

// find
const resultFind = numbers.find((item) => item = 12)
console.log(resultFind);

// reduce 
const ite = ['item1', 'item2', 'item3']
const resultReduce = ite.reduce((total, curentElement) => {
    return total + curentElement + ' '
}, '')
console.log(resultReduce);


const sumReduce = numbers.reduce((total, curentElement) => {
    return total + curentElement
}, 0)

console.log(sumReduce);


const numbers1 = [12, 0, -1, 8, -2] 

const sumReduce1 = numbers1.reduce((total, curentElement) => {
    if (curentElement > 0) {
        return total + curentElement
    }
    return total 
    
}, 0) 

console.log(sumReduce1);


// самовызывающаяся функция (IIFE) 

(function() {
    console.log('IIFE');
})()

// функция конструктор
// 1. Вызов вункции с new
// 2. Название функции с большой буквы

function User (fullName, age) {
    this.fullName = fullName
    this.firstName = fullName.split(' ')[0]
    this.LasrName = fullName.split(' ')[1]
    this.age = age
    this.getYear = () => {
        return this.age
    }
}

const user = new User('Denis Misochenko', 25)
console.log(user.getYear())
console.log(user)

function Elemnts (name, content, styles = {}) {
    this.name = name
    this.content = content
    this.styles = styles
    this.show = function () {
        this.styles.display = 'block'
    };
    this.hide = function () {
        this.styles.display = 'node'
    }

}
const element = new Elemnts('div', 'Hello World', {fontsize: '12px', background: 'gray'})
console.log(element)
console.log(element.show())


// Замыкания


// классы 
function Person (name, age, status) {
    this.name = name
    this.age = age
    this.status = status
    this.getYear = () => {
        return 2022 - this.age 
    }
}


const me = new Person('Denis', 25, 'online')
console.log(me.getYear());

class Per {
    constructor(name, age, hasCar) {
        this.name = name
        this.age = age
        this.hasCar = hasCar
    }

    sayHi() {
        return `Hi i'am ${this.name}`
    }
}

const person = new Per('Denis', 25, false)
console.log(person.sayHi());


class Animal {
    constructor(options) {
        this.name =options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('i am animal');
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 7,
    hasTail: true
})

console.log(animal);

class Cat extends Animal {
    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('i am cat');
    }

    get ageInfo() {
        return this.age * 7
    }
    set ageInfo(newAge) {
        this.age = newAge
    }
    
}
const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black',

})
console.log(cat);