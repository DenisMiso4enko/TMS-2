const count = document.querySelector('.count')
const plusBtn = document.querySelector('.btn-plus')
const body = document.body
plusBtn.addEventListener('click', handelClick)

function handelClick() {
    count.textContent = ++count.textContent
    if (parseInt(count.textContent) === 5) {
        plusBtn.removeEventListener('click', handelClick)
    }
}

const showBtn = document.querySelector('.btn-show')
const hideBtn = document.querySelector('.btn-hide')
const content = document.querySelector('.content')

function colabse() {
    content.classList.toggle('show')
}

showBtn.addEventListener('click', colabse)
hideBtn.addEventListener('click', colabse)

const btnClick = document.querySelector('#btn-click')
btnClick.addEventListener('click', function(e) {
   e.currentTarget.textContent = ++ e.target.textContent
})