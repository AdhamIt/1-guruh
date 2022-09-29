// let select = document.createElement('select')
// let option = document.createElement('option')
// option.value="bir"
// option.innerText="Bir"


// let option1 = document.createElement('option')
// option1.value="ikki"
// option1.innerText="Ikki"

// let option2 = document.createElement('option')
// option2.value="uch"
// option2.innerText="Uch"


// select.append(option)
// select.append(option1)
// select.append(option2)
// document.querySelector('.wrapper').append(select)


let ism = document.getElementById('ism')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let url = document.querySelector('#url')
let birinchi = document.getElementById('birinchi')
let chekboxuchun = document.getElementById('chekboxuchun')
let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
  console.log("Text inputidagi qiymat", ism.value)
  console.log("Tel inputidagi qiymat", phone.value)
  console.log("Email inputidagi qiymat", email.value)
  console.log("Url inputidagi qiymat", url.value)
  console.log("birinchi inputidagi qiymat", birinchi.value)
  console.log('Checkbox dagi qiymat', chekboxuchun.checked)
})