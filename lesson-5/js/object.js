// const user = {
//     name: 'Den',
//     age: 25,
//     phone: 987755,
//     email: 'kmm@mail.com',
//     passwoed: 123,
// }

// user.passwoed = 1234 
// user.city = 'Minsk'
// delete user.phone 

const product = {
    id: 1,
    name: 'Пылесос',
    brand: 'LG',
    counter: 3,
    peice: 1200,
    totalPrice: 3600,
}

for (let key in product) {
    console.log(`ключ: ${key}, и значение ${product[key]}`);
}

// свойство объекта в переменной !!!!!!



// объекта как сылочный тип данных 

let product2 = {}
function copyObj(obj) {
    for (let key in obj) {
        product2[key] = obj[key]
    }
    return (product2 !== product)
}

console.log(copyObj(product));


const product3 = Object.assign({}, product, {})
console.log(product3);




// Метод объекта - это фуекция которя находиться в свойсте объекта 


// 

function getLocation() {
    return (this.country + ' ' + this.continent)
}

let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
    getLocation,  // метод объекта
  }
  
  let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
    getLocation, // метод объекта
  }

console.log(developer1.getLocation());



const inctenceUser = {
    firstName: 'Den',
    lastName: 'Misochenko',
    age: 25,
    showFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    getUserName: function () {
        console.log('@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase());
        
    },
}

console.log(inctenceUser.getUserName());
console.log(inctenceUser.showFullName());


// Конструкторы 

const user1 = {
    firstName: 'Den',
    lastName: 'Misochenko',
    age: 25,
    showFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    getUserName: function () {
        console.log('@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase());
        
    },
}

const user2 = {
    firstName: 'Vlad',
    lastName: 'Kjjj',
    age: 25,
    showFullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    getUserName: function () {
        console.log('@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase());
        
    },
}


function User (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.year = 2022 - age
    this.showFullName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
    this.getUserNam = function () {
        console.log('@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase());
        
    }
}

const user4 = new User('Ilya', 'Misochenko' ,27)
console.log(user4);
console.log(user4.showFullName());