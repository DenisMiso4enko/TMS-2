// let x = 20
// let y = 58
// let z = 42

// // function showSumm() {
// //     let x = 20
// //     let y = 58
// //     let z = 42
// //     console.log(x + y + z);
// // }
// // console.log(showSumm());

// function calc(x, y, z) {
//     let sum = x + y + z
//     return sum
// }

// console.log(calc(x, y, z));

// const calcSum = function (x, y, z) { // functiom expression 
//     return x + y + z
// }

// console.log(calcSum(5, 8, 90));

//let, const доступны только после объявдения

// 1 
function isEven(num) {
    if (num % 2 == 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isEven(9)

// 2 
function isMore(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
   } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

isMore(10,8,2)

// 3
function isReport(str) {
    let userEnter = str
    let strLenght = str.length
    let aler = `Строка ${userEnter} состоит из ${strLenght} символов`
    return console.log(aler);
}
isReport('это строка')

//4
// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );

// }   
// pow()
// 4    !!!!!!!!!!!!!!! возведение в степень  
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return console.log(result);
  }

pow(5, 4)




// 5 удалить пробел из строки   Написать функцию, которая принимает строку, как аргумент, и возвращает новую строку, но уже без пробелов.

// function probel(input) {
//     return console.log(input.split(' ').join(''));
// }
// probel('Htllo woeld    i am')

function deleteSpace(input = '') {
    let result = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            result += input[i]
        }       
    }
    return console.log(result);
}
deleteSpace('No Space')


// function deleteSpace(text = '') {
//     return console.log(text.replace(/\s/g, ''));
// }
// deleteSpace('Hello Worls')

// 6  Написать функцию, которая принимает строку, как аргумент, и возвращает новую ее зеркальную версию.

function isReverce(string) {
    return string.split('').reverse().join('');
}

console.log(isReverce('Hello'));

function delRev(s = '') {
    let newString = ''
    for (let i = s.length - 1; i >= 0; i--) {
        newString += s[i]
    }
    return console.log(newString);
}
delRev('helHtllo woeld    i amlo')


// 7  // 7*. Написать функцию, которая принимает строку и трансформирует ее в camelCase

function cammel(text) {
    let cam = text.toUpperCase()
    console.log(cam);
}
cammel('sjdnc lsmdoc')

// 8
function transform(t = '') {
    let userEnter = t.toUpperCase()
    let userEnterLow = userEnter.toLowerCase()
    console.log(userEnterLow);
    
}

transform('ПривеТ')

// Проверка на строки !!!

