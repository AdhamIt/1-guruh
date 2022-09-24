// // Avvaldan bor bo`lgan funksiyalar
// // console.log("jhskdjhfjks")
// // console.log(Math.sqrt(4))
// // let mass  = [2,4,5,6,8]
// // console.log(mass.concat([1,2,4,5]))

// // Shaxsiy funksiyalar.
// function log () {
//   console.log('Funksiyamiz ishlayapdi')
// }

// log();
// log()
// log()
// log()
// log()
// log()
// // qiymat qaytaradigan, qiymat qaytarmaydigan
// // argument qabul qiladigan, qabul qilmidigan
// function fun2(name){
//   console.log('Mening ismim '+ name)
// }

// fun2('Ixtiyor')
// function con(argument){
//   console.log(argument);
// }

// con('Consolning o`rniga ishlatsa bo`ladi endi bu funksiyani')
// con(4)
// con([1,2,3,45,4])

// function PowerA3(son){
//   if(typeof(son) != 'number'){
//     console.log('Bu kiritgan argumentingiz son emas')
//   }
//   else{
//     console.log(son**3)
//   }
// }
// function PowerA432(son){
//   if(typeof(son) != 'number'){
//     console.log('Bu kiritgan argumentingiz son emas')
//   }
//   else{
//     console.log(son**4)
//     console.log(son**3)
//     console.log(son**2)

//   }
// }
// 45,5 = 455
// function RectPS(x1,y1,x2,y2){
//   let a = Math.abs(x2-x1)
//   let b = Math.abs(y2-y1)

//   console.log('Yuzasi: '+ a*b)
//   console.log('Peremetri: '+ 2*(a+b))
// }
// RectPS(1,1,2,2)

// let son = Number(prompt('dondsfnj'))

// function AddRightDigit(birinchison,ikkinchison){
//   console.log(String(birinchison)+String(ikkinchison))
// }
// AddRightDigit(12,4)

// function DigitCountSumm(son){
//   console.log(String(son).length)
//   let yigindi = 0;
//   for(let i = 0; i<String(son).length; i++){
//     // console.log(String(son)[i])
//     yigindi += Number(String(son)[i]);
//   }
//   console.log(yigindi);
// }

// DigitCountSumm(23)
// DigitCountSumm(12803095)

function tekshir(matn){
  let operatsiya = matn.includes('i') || matn.includes('I') // true, false
  console.log(operatsiya)

}
tekshir('so`z')
tekshir('Ilhom')
tekshir('tekshir')