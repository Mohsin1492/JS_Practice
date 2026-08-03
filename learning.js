// Singleton Method for creating object
// Object Literals
const sym1 = Symbol("Symbol")

const jsUser = {
    name: "Mohsin",
    "full name": "Mohsin Ali",
    age: 21,
    [sym1]: "Symbol1",
    location: "Karachi",
    email: "mohsin@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
};

jsUser.greetings = function (){
    return `Hello, ${this.name}`
}

// console.log(jsUser.greetings())

// Constructor method Creates Multiple Instances
// Object.create 




const myUser = {}
myUser.name = 'Sarwar'
myUser['full name'] = "Sarwar Pasha"
myUser.age = 20
myUser.isLoggedIn = false

// console.log(myUser)
// console.log(typeof myUser["full name"])



const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const objs = Object.assign(obj1 , obj2, obj3)
// const objs = Object.assign({}, obj1 , obj2, obj3)
// console.log(objs);

// using Spread Operator
const objs = {...obj1, ...obj2, ...obj3}
// console.log(objs);


let userArr = Object.keys(myUser)
// console.log(userArr);


const course = {
    courseName: "JS",
    courseInstructor: "Hitesh",
    coursePrice: "999"
}

const {courseName, courseInstructor, coursePrice} = course
// console.log(courseName);
// console.log(courseInstructor);
// console.log(coursePrice);


const {courseName : name, courseInstructor : instructor, coursePrice : price} = course
// console.log(name);
// console.log(instructor);
// console.log(price);
