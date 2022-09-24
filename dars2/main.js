// console.log('Assalomu aleykum')
// // number, boolean, array, object, string
// console.log(typeof('Malumot'))
// // let, var, const
// let yosh = 5
// yosh = 45
// console.log(yosh)
// // const ism = 'Ro`zimboy'
// // ism = "nurali"
// // console.log(ism)
// //  Matematik ifodalar
// // +,-,*,/,daraja, kasr, ildiz,
// let bir = 5, ikki = 9;
// console.log(bir + ikki)
// console.log(bir-ikki)
// console.log(bir*ikki)
// console.log(bir/ikki)

// // Math -> matematik ifodalarni aniqlab beruvchi kutubxona
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.abs(5)) // Sonning modulini aniqlab beradi
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.99999999))
// console.log(Math.round(4.5))
// // sin, asin, cos, acos, tan, atan, ceil, floor, max, min, pow, yaxlitlash
// console.log(Math.max(4,9,7,8,10,25,78))
// console.log(Math.min(4,9,7,8,10,25,78))
// console.log(Math.pow(3,4))

// 1-masala
// let x = 14.26
// let y = -1.22
// let z = 0.035
// let t;
// let birinchi, ikkinchi, uchinchi
// birinchi = 2*Math.cos(x-Math.PI/6)
// ikkinchi = 0.5 + Math.sin(y) * Math.sin(y)
// uchinchi = 1 + (z*z/(3-(z*z)/5))
// t = birinchi / ikkinchi *uchinchi
// console.log(t)

// 5 - masala
// // Math.sqrt ildizni hisoblab beradi
// let x = -15.246
// let y = 0.04642
// let z = 2000.1
// let a
// let birinchi,ikkinchi, uchinchi
// let daraja_ildizli
// daraja_ildizli = -1*Math.sqrt(Math.abs(x))


// birinchi = Math.log(Math.pow(y, daraja_ildizli))
// ikkinchi = x- y/2
// uchinchi = Math.sin(Math.atan(z))*Math.sin(Math.atan(z))
// a = birinchi * ikkinchi + uchinchi
// console.log(a)

// 10 - masala 
// let x = 0.03981
// let y = -1625
// let z = 0.512
// let a
// let birinchi, ikkinchi, uchinchi

// birinchi = Math.pow(2, -x)
// ikkinchi = Math.sqrt(x + Math.pow(Math.abs(y), 1/4))
// let uch1 = Math.pow(Math.E, (x - 1/Math.sin(z))) 
// uchinchi = Math.pow(uch1, 1/3)

// a = birinchi * ikkinchi * uchinchi
// console.log(a)

// 15 - masala

// let x = 2.444
// let y = 0.00869
// let z = -13
// let h
// let bir, ikki, uch, tort, besh
// bir = Math.pow(x, y+1) + Math.pow(Math.E, y-1)
// ikki = 1 + x * Math.abs(y - Math.tan(z))
// uch = 1 + Math.abs(y - x)
// tort = Math.pow(Math.abs(y-x), 2)/2
// besh = Math.pow(Math.abs(y-x), 3) / 3
// h = bir/ikki * uch + tort - besh; 
// console.log(h)


// 20 - masala
let x,y,z
x= 5;
y = 4.5
z = 0.5
let a, b 

a= (Math.sin(Math.pow(x * y - Math.pow(Math.E, x),2)))/(1 + x * 2.05 / y + 0.001*Math.pow(Math.E, x*x))
console.log(a)