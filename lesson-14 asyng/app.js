// console.log('1')
// setTimeout(() => {
//     console.log('2 ')
// }, 5000)
// console.log('3')


// повторяет код по заданному интервалу
// let counter = 0
// const timer = setInterval(() => {
//     counter++
//     console.log(counter)
//
//     if (counter == 3) clearInterval(timer)
// }, 3000 )

// setTimeout(() => {
//     clearInterval(timer)
// }, 9000)

// setTimeout(() => {
//     console.log('message 1')
// }, 2000)
// setTimeout(() => {
//     console.log('message 2')
// }, 3500)
// setTimeout(() => {
//     console.log('message 3')
// }, 5250)
//
// const h2Elem = document.querySelector('h2')
// const showBtn = document.querySelector('#show')
//
// const showH2 = setTimeout(() => {
//     h2Elem.classList.toggle('show')
// }, 3000)
//
// showBtn.addEventListener('click', () => {
//     clearTimeout(showH2)
// })
const circle1 = document.querySelector('.cirlce-1')
const circle2 = document.querySelector('.cirlce-2')
const circle3 = document.querySelector('.cirlce-3')

// setInterval(() => {
//     setTimeout(() => {
//         circle1.classList.toggle('red')
//     }, 0)
//     setTimeout(() => {
//         circle1.classList.toggle('red')
//         circle2.classList.toggle('orange')
//     }, 15000)
//
//     setTimeout(() => {
//         circle2.classList.toggle('orange')
//         circle3.classList.toggle('green')
//     }, 16000)
// }, 36000)
// setTimeout(() => {
//     circle1.classList.toggle('red')
// }, 0)
// setTimeout(() => {
//     circle1.classList.toggle('red')
//     circle2.classList.toggle('orange')
// }, 15000)
//
// setTimeout(() => {
//     circle2.classList.toggle('orange')
//     circle3.classList.toggle('green')
// }, 16000)

function svet () {
    circle1.classList.toggle('red')
    setTimeout(() => {
        circle1.classList.toggle('red')
        circle2.classList.toggle('orange')
    }, 15000)
    setTimeout(() => {
        circle2.classList.toggle('orange')
        circle3.classList.toggle('green')
    }, 17000)
    setTimeout(() => {
    circle3.classList.toggle('green')
    circle2.classList.toggle('orange')
    }, 30000)
    setTimeout(() => {
        circle3.classList.remove('green')
        circle2.classList.remove('orange')
    }, 33000)
}

// svet()
//
// setInterval(svet, 33000)
