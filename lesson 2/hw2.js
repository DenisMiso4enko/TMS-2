// Task 1 
let x = 20
let y = 58
let z = 42 

console.log(x + y + z);

// Task 2
const seconds = 60
const minunts = 60
const hours = 24
const year = 365 

const age = 25 
const secondsInYear = seconds * minunts * hours * year
const myAgeInSeconds = age * secondsInYear

console.log(myAgeInSeconds);

// Task 3
let count = 42
let userName = '42'
// Первый способ
let toString = (String(count))
let toNumber = (Number(userName))
console.log(toString, toNumber);
//Второй способ
let secondSolString = count + ''
let secondSolNumber = userName - ''
console.log(secondSolString, secondSolNumber);

// Task 4
let a = 1
let b = 2
let c = "белых медведей"

let result = (String(a) + String(b) + ' ' + c)
console.log(result);

// Task 5
const first = 'доступ'
const sec = 'морпех'
const th = 'наледь'
const four = 'попрек'
const five = 'рубило'

const lengthWords = (first + sec + th + four + five);
console.log(lengthWords.length);


// Task 6 

const string = 'Good'
const myNum = 45
const myTru = false 

console.log(`Variable: ${string}, have type: ${typeof string}`);
console.log(`Variable: ${myNum}, have type: ${typeof myNum}`);
console.log(`Variable: ${myTru}, have type: ${typeof myTru}`);

// Task 7 

const userAge = +prompt('Введите ваш возраст!')
console.log(userAge);


//ADVANCED level 

// Task 1 

let q = 4;
let w = 3;

console.log(q, w);

[q,w] = [w,q]

q = 4 * 3
w = q / b
q = a / b

console.log(q, w)

// Task 2 
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

const cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1])
console.log(cipher);