// // Составное представление 

// let a = 10 
// a += 2 // 12
// let b = 8 
// b -= 3 // 3

// console.log(a);
// console.log(b);

// let string = 'Hello'
// string += ' World'
// console.log(string);

// // Энкремент и дескримент 
// // 1)применятеся только с переменными

// // Постфиксная 
// let counter = 0 
// counter++ // = counter + 1
// console.log(counter);
// counter-- // дескримент = counter + 1
// console.log(counter);

// // Префиксная 
// let counter2 = 0 
// ++counter2 

// let counter3 = counter2++ // 1
// let counter4 = ++counter2 // 3
// console.log(counter3); 
// console.log(counter4);

// // Операторы сравнения 
     

// // Обератор объединения
// // let num = prompt('Введите любое число')
// // let result = num ?? 1

// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3')
// console.log(5 + 4 + 'px');
// console.log('5' + 4 + 5);


// Условия


// let a = 15
// let b = -8
// let c = 23 

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// if (a > b && a > c) {
//     console.log(a);
// } 
// if (b > a && b > c) {
//     console.log(b);
// }
// if (c > a || c > b) {
//     console.log(c);
// }


// let x = +prompt('введите число')
// // if (x >= 50 && x <= 100) {
// //     console.log('Yes');
// // } else {
// //     console.log('No');
// // }

// if (x < 50 || x > 100) {
//     console.log('x не в диапазоне');
// } else {
//     console.log('x в диапазоне');
// }

// неявное приобразование типов ( исп оп сравнения , лог операторы, и if)


// циклы 
// let str = 'JavaSctirp'
// let i = 0
// while (i < str.length) {
//     console.log(str[i]);
//     i++
// }

// let k = 0 
// while (k < 10) {
//     console.log(k);
//     k++
// }
// let b = 0 
// while (b < 10) {
//     console.log(b **2);
//     b++
// }

// let o = 0 
// let sum = 0
// while (o <= 20) {
//     sum += o
//     //console.log(sum);
//     o++
//  }
//  console.log(sum);

// Do While  сначала действие потом провелка 
// let y = 11
// do {
//     console.log(y);
//     y++
// } while (y < 10)

// цикл for  

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i ** 2);
// }


// let sum = 0
// for (let i = 0; i <= 20; i++) {
//     sum += i 
// }
// console.log(sum);


// let numberFqctorial = 5
// let fac = 1
// for (let i = 1; i <= numberFqctorial; i++) {
//     fac *= i
// }
// console.log(fac);

//let enter = prompt('Введите число больше 100')
// for (let enter = prompt('Введите число больше 100'); enter < 100;) {
//     console.log(enter);
// }

// let i 
// do {
//     i = prompt('Введите число больше 100')
// } while (i < 100)
// console.log(i);

// let enterNum
// for (enterNum = prompt('Введите число больше 100'); enterNum < 100; enterNum = prompt('Введите число больше 100')) {
//     console.log(enterNum);
   
// }
// console.log(enterNum);



// Сравнение строк
console.log('яблоко' == 'яблока'); // false
