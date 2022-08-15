const array = [1, 6, 2]
const copy = []

// forEach
array.forEach(function (elem, index, array) {
    copy.push(elem + ' по индексу ' + index)
})
console.log(copy)


// filter
let newAray = array.filter(function (elem) {
    return elem >= 2
})

console.log(newAray)

// map

let result = array.map(function (elem) {
    return elem * 2
})

console.log(result)

// reduce

let total = array.reduce(function (acc,elem) {
    return acc + elem
}, 0)

console.log(total)

