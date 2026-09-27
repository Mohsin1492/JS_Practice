// Singleton Method for creating object
// Object Literals
// const sym1 = Symbol("Symbol")

// const jsUser = {
//     name: "Mohsin",
//     "full name": "Mohsin Ali",
//     age: 21,
//     [sym1]: "Symbol1",
//     location: "Karachi",
//     email: "mohsin@example.com",
//     isLoggedIn: true,
//     lastLoginDays: ["Monday", "Saturday"]
// };

// jsUser.greetings = function (){
//     return `Hello, ${this.name}`
// }

// console.log(jsUser.greetings())

// Constructor method Creates Multiple Instances
// Object.create 




// const myUser = {}
// myUser.name = 'Sarwar'
// myUser['full name'] = "Sarwar Pasha"
// myUser.age = 20
// myUser.isLoggedIn = false

// console.log(myUser)
// console.log(typeof myUser["full name"])



// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'c', 4: 'd'}
// const obj3 = {5: 'e', 6: 'f'}

// const objs = Object.assign(obj1 , obj2, obj3)
// const objs = Object.assign({}, obj1 , obj2, obj3)
// console.log(objs);

// using Spread Operator
// const objs = {...obj1, ...obj2, ...obj3}
// console.log(objs);


// let userArr = Object.keys(myUser)
// console.log(userArr);


// const course = {
//     courseName: "JS",
//     courseInstructor: "Hitesh",
//     coursePrice: "999"
// }

// const {courseName, courseInstructor, coursePrice} = course
// console.log(courseName);
// console.log(courseInstructor);
// console.log(coursePrice);


// const {courseName : name, courseInstructor : instructor, coursePrice : price} = course
// console.log(name);
// console.log(instructor);
// console.log(price);


// ---------------------------------------------------------------------------------------


// function myName (){
//     console.log("Mohsin Ali");
// }
// myName();
// myName();
// myName();


// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNum(5, 5);


// function addTwoNum(num1,num2){
//     return num1 + num2
// }



// function addTwoNum(num1,num2){
//     let sum = num1 + num2
//     return sum
// }
// const result = addTwoNum(5, 5);
// console.log(`Result: ${result}`);



// function loggedInUserMessage(username){
//     if(username === undefined){
//         return  `Please enter a Username`
//     }else{
//         return `${username} just logged in`;
//     }
// }
// console.log(loggedInUserMessage());


// function calculatePrice(...num){
//     return num
// }
// console.log(calculatePrice(100, 200, 300));


// const user1 = {
//     username : "Mohsin",
//     price : 399
// }
// const user2 = {
//     username : "Ali",
//     price : 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
// }
// handleObject(user2);


// const newArray = [100, 200, 300, 400]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(newArray));


// function parent (){
//     const username = "Mohsin";

//     function child(){
//         const age = 20;
//         console.log(username);
//         console.log(age);
//     }
//     child()
// }
// parent()


// const user = {
//     username: "Mohsin",
//     message: function(){
//         console.log(`${this.username}, Welcome !!`);
//     }
// }
// user.message();


// function arrow(){
//     let username = "Mohsin"
//     console.log(this.username);
//     console.log(this);
// }


// const arrow = function(){
//     let username = "Mohsin"
//     console.log(this.username);
//     console.log(this);
// }


// const arrow = () => {
//     let username = "Mohsin"
//     console.log(this.username);
//     console.log(this);
// }
// arrow()


// // IIFEs are used to avoid pollution of global scope
// (function chai(){
//     console.log("Hello");
// })();

// ( ()=>{
//     console.log("Hello, World!");
// } )();

// ( (name)=>{
//     console.log(`Hello, ${name}`);
// } )('Mohsin');


// const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     default:
//         break;
// }



// // To find an Array is empty or not
// const userArr = []
// if(userArr.length === 0){
//     console.log("User is empty");
// }


// // To find an Object is empty or not
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }


// // || is the Logical OR operator in JavaScript. But there is an important detail: when used in an expression, || returns the first truthy value.
// let uname = "" || "Guest";
// console.log(uname);
// // Because "" is falsy, JavaScript uses "Guest".


// // The nullish coalescing operator ?? is used to provide a default value when the left side is null or undefined. 
// username = null;
// let name = username ?? "Guest";
// console.log(name);


// // Ternary Operator
// let age = 18
// age >= 18 ? console.log("Greater or equal to 18") : console.log("Less than 18");


// for (let i = 0; i < 11; i++) {
//     let element = i;
//     console.log(element);
// }


// let num = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }


// for(let i = 1; i <= 5; i++){
//     console.log(`Table of ${i} :`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }



// let myArr = ['Python', 'Javascript', 'Dart']
// for (let index = 0; index < myArr.length; index++) {
    //     const element = myArr[index];
    //     console.log(element);
    // }
    
    
    
    // let num = 0
    // while(num <= 20){
//     console.log(`number is : ${num}`);
//     num = num + 10
// }




// let myArr = ['Python', 'Javascript', 'Dart']
// let i = 0
// while(i < myArr.length){
//     console.log(myArr[i]);
//     i = i + 1
// }



// ------------- For of loop -------------

// const myArr = [0,1,2,3,4,5] 
// for (const val of myArr) {
//     console.log(`val : ${val}`);
// }


// // maps contain unique values
// const map = new Map()
// map.set('PK', 'Pakistan')
// map.set('CH', 'China')
// map.set('IR', 'Iran')
// console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }


// const myobj = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "Ruby",
//     py: "Python"
// }
// for (const key in myobj) {
//     console.log(key);
// }

// for (const key in myobj) {
//     console.log(`${key} is for ==> ${myobj[key]}`);
// }



// const programmingLang = ["Js", "python", "c#"]
// for (const key in programmingLang) {
//     console.log(programmingLang[key]);
// }



// const coding = ["Javascript", "Python", "C#", "Java"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })



// const myCoding = [
//     {
//         languageName: "Javascript",
//         languageExtension: ".js"
//     },
//     {
//         languageName: "Python",
//         languageExtension: ".py"
//     },
//     {
//         languageName: "Java",
//         languageExtension: ".java"
//     },
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })



// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const numss = myNums.filter((num)=> num > 5)
// console.log(numss);

// const numss = myNums.filter((num)=> {
//     return num > 5
// })
// console.log(numss);
    
    
    
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =[]

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let newBooks = books.filter((book) => book.genre === 'Non-Fiction')
// console.log(newBooks);

// let newBooks = books.filter((book) => book.publish > 2000)
// console.log(newBooks);

// let newBooks = books.filter((book) => {
//     return (book.publish >= 1995 && book.genre === "History")
// })
// console.log(newBooks);



// const myNums = [1,2,3,4,5,6,7,8,9,10]

// console.log(myNums.map((num)=> num >= 5));
// console.log(myNums.filter((num)=> num >= 5));




// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const initialvalue = 0
// const reducedNum = myNums.reduce(
//     (acc, val) => acc + val,
//     initialvalue
// )
// console.log(reducedNum);

// const reducedNum = myNums.reduce( (acc, val) => acc + val, 0)
// console.log(reducedNum);



// // Find Names of students who passed.
// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 45 },
//     { name: "Sara", marks: 72 },
//     { name: "John", marks: 38 }
// ];

// const passedStudents = students
//                         .filter((student) => student.marks >= 50)
//                         .map((student) => student.name)

// console.log(passedStudents);



