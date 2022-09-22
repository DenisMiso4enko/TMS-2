// свойства-аксессоры   set get

// const reactainer = {
//     width: 250,
//     height: 100,

//     get area() {
//         return this.height * this.height
//     },

//     set area(value) {
//         if (value != this.area) {
//             throw new Error('error')
//         } else {
//             console.log('ok');
//         }
//     }
// }

// console.log(reactainer.area);


// const user = {
//     firtName: 'Den',
//     lastName: 'Mis',
//     get fullName() {
//         return this.firtName + ' ' + this.lastName
//     },
//     set fullName(value) {
//         [this.firtName, this.lastName] = value.split(' ')
//     }
// }
// console.log(user);
// user.fullName = 'Ivan Ivanov'
// console.log(user.fullName);


// __proto__
// const bird = {
//     ifFly: true,
//     beak: 'md',
//     goToFly() {
//         console.log('Bird fly');
//     }
// }


// const chicken = {
//     __proto__: bird,
//     ifFly: false,
//     goToFly() {
//         console.log('Bird chicken');
//     }
// }
// chicken.goToFly()
// console.log(chicken);
// const chicken = Object.create(bird, { ifFly: {value: false} })
// chicken.beak = 'mk'
// console.log(chicken);
// console.log(Object.getPrototypeOf(chicken)); // показывает родитея 

// const ruster = {}
// Object.setPrototypeOf(ruster, bird)
// console.log(ruster);


// const car = {
//     wheels: 4,
//     fuel: 'disel',
//     start() {
//         // console.log('машина поехала');
//     }
// }

// const track = {
//     __proto__: car,
//     wheels: 8,
//     trailer: [],
//     addCargo(item) {
//         this.trailer.push(item)
//     }
// }
// track.addCargo('milk')
// console.log(track);

// const track = Object.create(car, {
//     wheels: { value: 8 },
//     trailer: { value: [] },
//     addCargo: { value: function(item) {  this.trailer.push(item) } }
// })

// track.addCargo('bubbles')
// console.log(track);


// for (let key in chicken) {
//     console.log(key, chicken[key]);
// }

//Object.keys(object)

// console.log(Object.keys(chicken));



// function User (name, email) {
//     this.name = name
//     this.mail = email
// }

// const baseUser = {
//     isAdmin:false,
//     role:'user',
//     showIfo: function() {
//         console.log(this.name + ' ' + this.mail);
//     }
// }

// User.prototype = baseUser
// User.prototype.login = function() {
//     console.log('Пользователь вошел!');
// }

// console.log(User);


// const newUser = new User('Ivan', 'Ivam@gmail.com')
// console.log(newUser);



// function Car() {
//     wheels = 8
//     fuel = 'disel'

// }


// function Track(name) {
//     this.name = name
//     this.start = function(item) {
//         console.log('car start');
//     }
//     this.trailer = []
//     this.addCargo = function(item) {
//         this.trailer.push(item)
//     }
// }

// Track.prototype = Car

// const newCar = new Track('track')
// newCar.addCargo('bubble')
// console.log(newCar);



// Classes 

// function Post(title, author) {
    // this.title = title
    // this.autor = author
    // this.createdAt = new Date()
    // this.id = Date.now()
    // this.publish = function() {
    //     console.log('post publish');
    // }
// }


class Post {
    id = Date.now()
    createdAt = new Date()
    constructor(title, author) {
        this.title = title
        this.autor = author
    }

    publish() {
        console.log('post publish');
    }
}

const post = new Post('lorem picsum', 'Denis')
console.log(post);

class User {
    isAdmin = false
    id = Date.now()
    constructor(firtName, lastName, birdthYear) {
        this.firtName = firtName
        this.lastName = lastName
        this.birdthYear = birdthYear
    }

    showInfo() {
        console.log(this.firtName + ' ' + this.lastName);
    }
}

const user1 = new User('Denis', 'Misochenko', 1996)
console.log(user1);


class Reactainer {
    constructor(width, height, color) {
        this.width = height
        this.height = width
        this.color = color

        this.renderRec()
    }
    calcArea() {
        return this.width * this.height
    }
    template() {
        return ` 
        <div style="width: ${this.width}px; background-color: ${this.color}; height: ${this.height + 'px'};">
            <h1>${this.calcArea()}</h1>
        </div>
        `
    }

    renderRec() {
        document.body.innerHTML += this.template()
    }
}

new Reactainer(200, 300, 'red')
new Reactainer(100, 100, 'orange')
new Reactainer(100, 300, 'blue')


// наследование класссов

class Admin extends User {
    isAdmin = true

    constructor(firtName, lastName, birdthYear, email) {
        super(firtName, lastName, birdthYear,)
        this.email = email
    }

    deleteAnotherUser(id) {
        console.log(`User ${id} deleted`);
    }

    showInfo() {
        super.showInfo()
        console.log(this.email);
        // console.log(console.log(this.firtName + ' ' + this.lastName + ' ' + this.email));
    }
}
const admin = new Admin('Yen', 'fin', 900, '134@gmail.com')
console.log(admin);
admin.showInfo()


class Squer extends Reactainer {
    constructor(size, color) {
        super(size, size, color) 
    }
}

new Squer(400, 'red')


class Collapse {
    constructor(element) {
        this.element = element

        this.btnElement = this.element.querySelector('[data-role]')
    }
}