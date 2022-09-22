const rootEl = document.querySelector('#root')
const reftContainer = document.querySelector('#left')



// отправка запроса
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
xhr.send()

xhr.onload = function (e)  {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response)

        data.forEach(item => {
            const itemHTML = `
        <div class="card" style="width: 18rem;" id="${item.id}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты. 
                </p>
                <p>${item.email}</p>
                    <a href="#" data-action="open" class="btn btn-primary">Перейти куда-нибудь</a>
            </div>
        </div>
        `
            rootEl.insertAdjacentHTML('beforeend', itemHTML)
        })
    }
}

// ошибка
xhr.onerror = function (event) {
    console.error('ошибка, что-то пошло не так')
}
// процесс загрузки
// xhr.onprogress = function (event) {
//     console.log(`загружено ${event.loaded} из ${event.total}`)
// }


rootEl.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'open') {
        const parent = e.target.closest('.card')
        const id = parent.id
        xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`)
        xhr.send()
        xhr.onload = function (e) {
            const user1 = JSON.parse(xhr.response)
            console.log(user1)
            const user1HTML = `
            <div class="cart" id="${user1.id}">
                <h1>${user1.name}</h1>
                <p>${user1.phone}</p>
                <p>${user1.website}</p>
            </div>
            `
            reftContainer.innerHTML = user1HTML
        }

    }
})



