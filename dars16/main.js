// DOM -> Document Object Model 

let dollar = document.getElementById('dollar')
let chiquvchi = document.getElementById('chiquvchi')

dollar.addEventListener('input', ()=>{
  let son = Number(dollar.value)
  // console.log(son*11000)
  chiquvchi.innerText = son*11000+" so'm"
})
chiquvchi.addEventListener('click', ()=>{
  console.log('Bosildi')
})
chiquvchi.addEventListener('mousemove', ()=>{
  console.log('Sichqoncha harakatlandi')
})
chiquvchi.addEventListener('mouseenter', ()=>{
  console.log('Sichqoncha maydonga kirdi')
})
chiquvchi.addEventListener('mouseleave', ()=>{
  console.log('Sichqoncha tark etdi')
})

window.addEventListener('keypress', ()=>{
  console.log('Knopka bosildi')
})