// // ---------------------------- Filter ----------------------------

// // 1- Even numbers only
// // Given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], return only the even numbers.

// const myArr = [1,2,3,4,5,6,7,8,9,10]
// const evenArr = myArr.filter( (num) => num%2 === 0)
// console.log(evenArr);


// // 2- Adults only
// // Given an array of people:JavaScript[
// //   { name: "Alice", age: 17 },
// //   { name: "Bob", age: 25 },
// //   { name: "Charlie", age: 16 },
// //   { name: "Diana", age: 30 }
// // ]Return only people who are 18 or older.

// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 16 },
//   { name: "Diana", age: 30 }
// ]
// const oldPeople = people.filter( (val) => val.age >= 18 )
// console.log(oldPeople);




// // 3- Positive numbers
// // Given [-5, 0, 3, -2, 8, -1, 10], return only the positive numbers (greater than 0).

// const numbers = [-5, 0, 3, -2, 8, -1, 10]
// const filteredNum = numbers.filter( (num) => num > 0 )
// console.log(filteredNum);




// // 4- Products in stock
// // Given:JavaScript[
// //   { name: "Laptop", inStock: true, price: 999 },
// //   { name: "Phone", inStock: false, price: 699 },
// //   { name: "Tablet", inStock: true, price: 399 },
// //   { name: "Headphones", inStock: false, price: 99 }
// // ]Return only the products that are currently in stock.

// const products =[
//   { name: "Laptop", inStock: true, price: 999 },
//   { name: "Phone", inStock: false, price: 699 },
//   { name: "Tablet", inStock: true, price: 399 },
//   { name: "Headphones", inStock: false, price: 99 }
// ]
// const instockProduct = products.filter((num)=> num.inStock === true)
// console.log(instockProduct);




// // ---------------------------- Map ----------------------------



// // 1- Double the numbers
// // Given [1, 2, 3, 4, 5], return a new array where every number is doubled.

// const num = [1,2,3,4,5]
// const doubledNum = num.map((num)=> num * 2)
// console.log(doubledNum);




// // 2- Extract names
// // Using the people array from question 2, return an array of just the names: ["Alice", "Bob", "Charlie", "Diana"].
// // const people = [
// //   { name: "Alice", age: 17 },
// //   { name: "Bob", age: 25 },
// //   { name: "Charlie", age: 16 },
// //   { name: "Diana", age: 30 }
// // ]

// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 16 },
//   { name: "Diana", age: 30 }
// ]
// const peopleName = people.map((val)=> val.name)
// console.log(peopleName);




// // 3- Add tax
// // Given prices [10, 20, 30, 40], return a new array with 10% tax added to each price (rounded to 2 decimal places if needed).

// const prices = [10, 20, 30, 40]
// const aftertaxPrices = prices.map((val)=> (val = val + (val * 0.1)))
// console.log(aftertaxPrices);




// // 4- Format full names
// // Given:JavaScript[
// //   { first: "John", last: "Doe" },
// //   { first: "Jane", last: "Smith" },
// //   { first: "Bob", last: "Johnson" }
// // ]Return ["John Doe", "Jane Smith", "Bob Johnson"].

// const names = [
//   { first: "John", last: "Doe" },
//   { first: "Jane", last: "Smith" },
//   { first: "Bob", last: "Johnson" }
// ]
// const fullName = names.map((val)=> `${val.first} ${val.last}`)
// console.log(fullName);






// // ---------------------------- Reduce ----------------------------



// // 1- Sum of numbers
// // Given [1, 2, 3, 4, 5], calculate the total sum.

// const nums = [1, 2, 3, 4, 5]
// const totalSum = nums.reduce((acc, val) => (acc + val),0)
// console.log(totalSum);




// // 2- Count occurrences
// // Given ["apple", "banana", "apple", "orange", "banana", "apple"], return an object that counts how many times each fruit appears:JavaScript{ apple: 3, banana: 2, orange: 1 }

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
// const fruitCount = fruits.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc
// }, {})
// console.log(fruitCount);




// // 3- Find the maximum
// // Given [23, 45, 12, 67, 34, 89, 5], find the largest number using reduce (don’t use Math.max).
// const numbers = [23, 45, 12, 67, 34, 89, 5, 1000]
// const largestNum = numbers.reduce((acc, num) => {
//   return num > acc ? num : acc
// }, numbers[0])
// console.log(largestNum);




// // 4- Total price of in-stock items
// // Using the products array from question 4, calculate the total price of only the items that are in stock.
// // const products =[
// //   { name: "Laptop", inStock: true, price: 999 },
// //   { name: "Phone", inStock: false, price: 699 },
// //   { name: "Tablet", inStock: true, price: 399 },
// //   { name: "Headphones", inStock: false, price: 99 }
// // ]

// const products =[
//   { name: "Laptop", inStock: true, price: 999 },
//   { name: "Phone", inStock: false, price: 699 },
//   { name: "Tablet", inStock: true, price: 399 },
//   { name: "Headphones", inStock: false, price: 99 }
// ]
// const totalInstockPrice = products
//                             .filter((val)=> val.inStock === true)
//                             .reduce((acc, val) => acc + val.price, 0)
// console.log(totalInstockPrice);






// // ---------------------------- Combine Questions ----------------------------






// // 1- Average age of adults
// // Using the people array, first filter adults (≥ 18), then calculate their average age.
// // const people = [
// //   { name: "Alice", age: 17 },
// //   { name: "Bob", age: 25 },
// //   { name: "Charlie", age: 16 },
// //   { name: "Diana", age: 30 }
// // ]

// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 16 },
//   { name: "Diana", age: 30 }
// ]
// const adults = people.filter((val)=> val.age >= 18);
// const totalAge = adults.reduce((acc, val)=> (acc + val.age), 0);
// const averageAge = totalAge / adults.length;
// console.log(averageAge);




// // 2- Total value of expensive in-stock products
// // From the products array, get only items that are in stock and cost more than $100, then calculate their total value.

// const products = [
//   { name: "Laptop", inStock: true, price: 999 },
//   { name: "Phone", inStock: false, price: 699 },
//   { name: "Tablet", inStock: true, price: 399 },
//   { name: "Headphones", inStock: false, price: 99 }
// ]
// const desiredProduct = products.filter((val) => val.inStock === true && val.price > 100)
// const totalPrice = desiredProduct.reduce((acc,val)=> acc + val.price, 0)
// console.log(totalPrice);