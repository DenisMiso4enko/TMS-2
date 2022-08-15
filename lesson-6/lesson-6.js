// TODO: создание массива
const numbers = [1, 2, 3, 4, 5]; // литеральный
//let nums = newAray(2,3,4,) // через конструктор
console.log(numbers[2]);

function addArray(arr, el) {
  if (Array.isArray(arr)) {
    arr[arr.length] = el;
  } else {
    console.log("не массив");
  }
}
addArray(numbers, 100);
addArray(numbers, 102);
console.log(numbers);

// for .. of
const users = ["den", "vlad", "y", "max"];

for (user of users) {
  console.log(user);
}
for (let i = 0; i < users.length; i++) {
  console.log(i, users[i]);
}

// 1
let arr = [1, 5, -10, 4, 58, 9, -98, -5];
function findPositiveNum(arr) {
  // let arr = [1, 5, -10, 4, 58, 9, -98, -5]
  let newArr = [];
  for (num of arr) {
    if (num >= 0) {
      // console.log(num);
      newArr[newArr.length] = num;
    }
  }
  console.log(newArr);
}
findPositiveNum(arr);

// 2

let ars = [
  {
    string: "javascript",
    number: 5,
  },
  {
    string: "css",
    number: 12,
  },
  {
    string: "html",
    number: 8,
  },
];

for (item of ars) {
  if (item.number > 10) {
    console.log(item.string);
  }
}




const list1 = [
    {
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
    },
    {
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 30,
      language: "JavaScript",
    },
    {
      firstName: "Maria",
      lastName: "Y.",
      country: "Belarus",
      continent: "Europe",
      age: 30,
      language: "Java",
    },
    {
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 70,
      language: "Python",
    },
  ];
  function getNumbersMatch(arr, str) {
    let score = 0
    for (let item of arr) {
        // console.log(item);
        for (let key in item) {
            if (item[key] == str) {
                score++
            } 
        }
    }
    if (score) {
        return score
    } else {
        console.log('совыпадения не найдены');
    }
  }

console.log(getNumbersMatch(list1, 'JavaScript'));


// TODO: методы массива 

const box = [50,60,70,100] 
const pack = [56,99,900]

// box.shift()
box.unshift(66)
console.log(box); 
const newBox = box.concat([67,90,988]) // 
console.log(newBox);


// 4 
let obj1 = []
const worlds = ['hello', 'world', 'html', 'ract.js'] 
for (key of worlds) {
    let newObj = {}
    newObj.world = key
    newObj.length = key.length
    obj1.push(newObj)
}
console.log(obj1);
