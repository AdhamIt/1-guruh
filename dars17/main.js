let vxod = document.querySelector('.vxod')
let qrkod = document.querySelector('.qrkod')
let forma = document.querySelector('.forma')
let orabturuvchi = document.querySelector('.orabturuvchi')
let textuchun=document.querySelector('.textuchun')
let toggle = document.querySelector('.toggle')
let tel = document.getElementById('tel')
let parol = document.getElementById('parol')






vxod.addEventListener('click', ()=>{
  forma.classList.remove('displaynone')
  vxod.classList.add('vxod')
  qrkod.classList.remove('vxod')
  textuchun.classList.add('displaynone')
})

qrkod.addEventListener('click', ()=>{

  forma.classList.add('displaynone')
  vxod.classList.remove('vxod')
  qrkod.classList.add('vxod')
  textuchun.classList.remove('displaynone')

  // let qr = <h1> Assalomu aleykum JS dasturchilar </h1>
  textuchun.innerHTML = '<h1> Assalomu aleykum Js dasturchilar </h1>'
})

toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('rangbarang')
})
forma.addEventListener('submit', (e)=>{
  console.log('Forma')
  if(tel.value == ""){
    // console.log('Bu yerga malumot krit axi')
    tel.placeholder="Hatolik mavjud/ Shu yerni to`ldiring"
  }
  if(parol.value == ""){
    // console.log('Bu yerga malumot krit axi')
    parol.placeholder="Hatolik mavjud/ Shu yerni to`ldiring"
  }
  e.preventDefault()
})