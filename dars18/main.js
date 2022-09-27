// Element yaratish
// 
// let div = document.createElement('div')
// let p = document.createElement('p')
// let link = document.createElement('a')

// let body = document.querySelector('body')
// div.innerHTML='<h1> ASSALOM </h1>'
// // div.style = ''
// body.style.backgroundColor = 'red'
// div.style = 'background-color:yellow; border: 1px solid black'

// div.addEventListener('click', ()=>{
//   div.style.backgroundColor='white'
// })
// body.append(div)


let body = document.querySelector('body')
let button1 = document.createElement('button')
let button2 = document.createElement('button')

button1.innerText='Oxiriga Qo`shish'
button2.innerText='Oxiridan O`chirish'
body.append(button1)
body.append(button2)
let qoshildi = 1;

button1.addEventListener('click', ()=>{
  let div = document.createElement('div')
  div.innerText='Qo`shildi '  + qoshildi;
  qoshildi++;
  div.style = 'border:1px solid black; background-color:yellow; margin:10px'
  body.append(div)
})

button2.addEventListener('click', ()=>{
  let divs = document.querySelectorAll('div')
  divs[divs.length-1].remove();
})