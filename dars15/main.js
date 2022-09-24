// let input = document.getElementById('oylik')
// let tanlash = document.getElementById('nalok')
// let btn = document.getElementById('btn')

// let nalokPuli = 500000;

// btn.addEventListener('click', ()=>{-
//   // console.log(input.value)
//   // console.log(tanlash.value)
//   let shart = tanlash.value;
//   if(shart == 'nalokli'){
//     console.log((Number(input.value)*12-nalokPuli*12)*0.1)
//   }
//   else {
//     console.log(Number(input.value)*12*0.1)
//   }
// })


// let ovqat = document.getElementById('ovqat')
// let txt = document.getElementById('txt')

// ovqat.addEventListener('click', ()=>{
//   let shart = ovqat.value
//   if(shart == 'somsa'){
//     txt.innerText = "So`msaning narxi "+ (3000+3000*0.1) + " so`m"
//   }
//   else if(shart == 'palov'){
//     txt.innerText = 'Palovning narxi 15000 so`m'
//   }
//   else if (shart == 'gumma'){
//     txt.innerText = 'Gummaning narxi 2000'
//   } 
//   else{
//     txt.innerText = 'Biror bir ovqatni tanlang'
//   }
// })

// let manzil = document.getElementById('manzil')
// let txt = document.getElementById('txt')

// manzil.addEventListener('click', ()=>{
//   switch(manzil.value){
//     case 'qoyliq':{
//       txt.innerText="7, 93"
//       break
//     }
//     case 'chorsu':{
//       txt.innerText="3, 54, 12"
//       break
//     }
//     case 'oloy':{
//       txt.innerText="434, 5545, 11111"
//       break
//     }
//     default:{
//       txt.innerText = 'Manzilni kiriting'
//     }
//   }
  
// })

let input = document.getElementById('txt')
// let btn = document.querySelector('.btn')
let input2 = document.getElementById('ikkinchi')

// btn.addEventListener('click', ()=>{
//   alert(input.value)
// })

input.addEventListener('input', ()=>{
  // console.log('input degan hususiyat ishladi')
  // console.log(input.value)
  input2.value = input.value  //'Nurullo qo`y telefonni'
})
input2.addEventListener('input', ()=>{
  input.value = input2.value
})