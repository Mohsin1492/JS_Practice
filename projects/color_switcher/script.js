const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        body.style.backgroundColor = e.target.id
        // if(e.target.id === 'red'){
        //     body.style.backgroundColor = 'red'
        // }else if(e.target.id === 'green'){
        //     body.style.backgroundColor = 'green'
        // }else if(e.target.id === 'blue'){
        //     body.style.backgroundColor = 'blue'
        // }else if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = 'yellow'
        // }else if(e.target.id === 'white'){
        //     body.style.backgroundColor = 'white'
        // }
    })
})