// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(`${res.status}`)
//         }
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
//

// Конструктор ошибок
// console.error(new Error('что-то пошло не так'))
// throw new Error('что-то пошло не так')

// const options = {
//     method: 'POST',
//     body: '{ "name": "Denis", "username": "67ybubiden"}',
//     headers: {'Content-type': 'application/json'},
//     credentials: 'include',
// }

// fetch('https://jsonplaceholder.typicode.com/users', options)
//     .then(res => {
//         if (!res.ok) {
//             throw  new Error(`${res.status}`)
//         }
//         return res.json()
//     }).then(data => console.log(data))
//     .catch(err => console.error(err))
//
// // cookies credentials: 'include', по умолчанию fetch не отпраляет запрос с cookie
// document.cookie = 'token=246666bob'; path='/'


// try catch

// try {
//     const a = 10
//     a = 20
// } catch (err) {
//     console.error(err)
// }
// console.log('ok')


// async
// async function foo() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         if (!responce.ok) throw new Error(`Ошибка ${responce.status}`)
//         const data = await responce.json()
//         console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
// }
// foo()

// async function getComments() {
//    try {
//        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
//        const data = await res.json()
//        console.log(data)
//    } catch (err) {
//        console.error(err)
//    }
// }
// getComments()
const containerEl = document.querySelector('.container')


async function getWeather() {
    try {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=1354067d4c5e5ba7d6625f68d153937b')
        const data = await res.json()
        console.log(data)
        renderWeather(data)

    } catch (err) {
        console.error(err)
    }
}
getWeather()


function renderWeather({ name, weather: [{ icon, description }], main: { temp, feels_like }, wind: { speed } }) {
    const weatherHTML = `
        <div class="weather">
            <h1 class="city">${name}</h1>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">
            <h2 class="desc-weather">${description}</h2>
            <h2 class="temp">${Math.floor(temp - 273)} C</h2>
            <div class="desc">
                <span class="wind">Ветер ${speed}</span>
                <span class="feels">Ощущэния${Math.round(feels_like - 273)}</span>
            </div>
        </div>
    `
    containerEl.innerHTML = weatherHTML
}