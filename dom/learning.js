// DOM - Document Object Model

// Document
// Text Node
// Attribute


// document.getElementById('title') 
// <h1 id=​"title" class=​"test">​DOM Lecture​</h1>​


// document.getElementById('title').id 
// document.getElementById('title').className


// document.getElementById('title').getAttribute('id') 
// document.getElementById('title').getAttribute('class')


// document.getElementById('title').setAttribute('class', 'test')
// // setAttribute will always overwrite
// document.getElementById('title').setAttribute('class', 'test heading')


// const title = document.getElementById('title')
// title.style.backgroundColor = 'blue'
// title.style.padding = '15px'
// title.style.borderRadius = '25px'


// title.textContent - Gives complete content written inside the tag.
// title.innerText - Gives only the text which is shown.
// title.innerHTML - Gives complete HTML values too inside the tag.


// document.querySelector('h1')
// document.querySelector('#title')
// document.querySelector('.heading')
// document.querySelector('input[type="password"]')


// const myUl = document.querySelector('ul')
// const firstLi = myUl.querySelector('li')
// firstLi.style.backgroundColor = "blue"
// firstLi.style.padding = "20px"
// firstLi.innerText = "First Li"


