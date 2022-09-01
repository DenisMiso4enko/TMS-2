// cookie , токины
// document.cookie = 'name=denis; path=/'
// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
//   }

//   console.log(getCookie('name'));

//   document.cookie = 'name=denis; path=/; max-age=0'

// JSON
// const user = `
//  {
//     "name": "Denis",
//     "age": 25,
//     "isAdmin": false,
//     "data": false

//  }
// `
// const userObjec = JSON.parse(user)
// console.log(userObjec);

// const cars = {
//     name: 'div',
//     className: 'block',
//     isSingle: true,
//     position: 45
// }
// const divElemJSON = JSON.stringify(cars)
// console.log(divElemJSON);

// Web Storage API   
// const task = {
//     text: 'text',
//     id: new Date(),
//     done: false
// }
// localStorage.setItem('task', JSON.stringify(task))
// const store = JSON.parse(localStorage.getItem('task'))
// console.log(store);
