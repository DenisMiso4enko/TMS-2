// import { showHello } from "./showHello.js";
// import { arr } from './array.js';
// import { calkSumArr } from './calcSumArr.js'

// showHello()

// console.log(calkSumArr(arr));

// const users = ['Anna', 'Victor', 'John', 'Peter']
// let [user1, , user3] = users;
// [user1, user3] = [user3, user1]
// console.log(user1, user3);
const data = [['name', 'Anna'], ['age', 28], ['profession', 'progremmer']] 
const user = {}
data.forEach(item => {
    const [key, value] = item
    user[key] = value
})
console.log(user) 


// const profile = ['codewars.com', 'male', ['john', 'Doe']]
// const [website, , [userName]] = profile
// console.log(website, userName);

const car = {
    brand: 'IKEA',
    age: 2019,
}
const {brand: cartBrand, age, isTruck = 'Нету в наличии'} = car
console.log(cartBrand, age, isTruck)

const profile2 = {
    website: 'codesweetly.com',
    gender: 'Female',
    fullName: {
        firstName: 'Anna',
        lastName: 'Johnson'
    },
    children: ['Lena', 'Ivan']
}
const { website, fullName: {firstName}, children: [childrenName]} = profile2
console.log(website, firstName, childrenName)

// rest