// let yosh = Number(prompt('Yoshingiz nechada'))
// if(yosh >0 && yosh<30){
//   console.log('Siz yoshiz')
// }
// else if(yosh>=30 && yosh < 60){
//   console.log('Siz kattasiz')
// }
// else if(yosh>=60){
//   console.log('Siz qarisiz')
// }
// else{
//   console.log('Yoshni qaytadan kiriting. kiritilgan yosh notogri')
// let yosh = Number(prompt('Yoshingiz nechada'))

// }

let pul = document.getElementById('pul')
let pul_birlik = document.getElementById('pul_birlik')
let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
  // console.log(pul.value)
  // console.log(pul_birlik.value)
  if(pul_birlik.value=='dollar'){
    // console.log(typeof(Number(pul.value)))
    console.log(Number(pul.value)/11000)
  }
  else if(pul_birlik.value == 'som'){
    // console.log('Ishladi')
    console.log(Number(pul.value)*11000)
  }
})