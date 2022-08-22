const liElements = document.querySelectorAll('li')
const body = document.body
const links = [
    'https://www.kufar.by/l',
    'https://baraholka.onliner.by',
    'https://vk.com/randy1996',
    'https://www.kufar.by/l'
]


links.forEach((link, index) => {
    const linkElem = document.createElement('a')
    linkElem.classList.add('links')
    linkElem.setAttribute('href', `${link}`)
    linkElem.textContent = `Link ${index + 1}`
    body.append(linkElem)
})

liElements.forEach((elem) => {
   elem.innerHTML = `<strong>${elem.textContent}</strong>`
    if (!elem.hasAttribute('list-item')) {
        elem.classList.add('list-item')
    }
})

const btnElement = document.querySelector('button')
const text = btnElement.textContent
btnElement.innerHTML = `<strong>text</strong>`
// btnElement.style.background = 'red'
// btnElement.style.border = 'none'
btnElement.style.cssText = 'color: white; font-size: 40px; background: red; border: none';


// классы
// 
const titleElement = document.createElement('h2')
const container = document.querySelector('.container')
titleElement.classList.add('title')
titleElement.textContent = 'Title'
container.append(titleElement)




// function createList() {
//     const ulElement = document.createElement('ul')
//     const li = document.createElement('li')
//     ulElement.append(li)
//     let pr = prompt('Введите элемент списка')
//     do {
//         li.textContent = pr
//         console.log(li);
//     } while(pr == null)
    
//     body.append(ulElement)
// }
// // // do while 
// // // promt == null , ''
// createList()
function createUl(){
    let addElement
    const ulNewElement = document.createElement('ul')
    do {
     addElement = prompt('Введите новый элемент')
    if (addElement) {
        const liElement = document.createElement('li')
        liElement.textContent = addElement
        ulNewElement.append(liElement)
    }
    console.log(addElement)
    } while (addElement)
    return ulNewElement
}

document.body.append(createUl())
