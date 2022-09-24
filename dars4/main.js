// // increment
// // decrement
// let i = 0;
// console.log(i++) //0
// console.log(++i) //2 
// console.log(i*3) //6
// i*=2
// console.log(i)   //12 //12 //4
// console.log(++i) //5  //1
// console.log(i)   //5  //1
// console.log(i**2)//25 //2
// console.log((i**0.5)*2) //50 //50 //10
// let ,  var , const 
// let b = 8 // number
// let g = 'dbksjh' // string
// let o = [2,4,6,8,4,4,36,8] // array ->massiv, list, ro`yxat, to`plam
// // 2, 7, 6, 
// console.log(o.length) // massiv uzunligi
// console.log(o[2]) // har bir element indexidan foydalanamiz
// console.log(o[1]+o[6])
// console.log(o[5]++)
// console.log(o[5])
// console.log(o)
// let malumot =[1, 'jhsdkj', true,[1,5,7,8, [1,2,3,5]] ]
// let papka = ['Bosh oyna', ['C disk', ['D diskdagi h papka', 'D papka']]]
// console.log(papka[1][1][1])

// let ss= [['g-1', 'g-2', ['gg-1', 'gg-2']], ['k-1', 'k-2', ['kk-1', 'kk-2']]]
// // console.log(ss[1][1][1][1]) // Danyor
// // console.log(ss[1][1]) // Hamdam
// // console.log(ss[1][0][1][0])  Sherzod
// // console.log(ss[0][2][1])
// // console.log(ss[1][2][1])
let liverpool = [['Allison'],['Vandeyk', 'Arnold', 'Matip', 'Robertson'], ['Hendorson', 'Fabinio', 'Milner'], ['Salah', 'Djota','Darvin']]
// // console.log(liverpool[1][2][0]) //Nurali
// console.log(liverpool[2][0]);
// console.log(liverpool[2][2]);
// console.log(liverpool[3][0]);

// // string

// let  ism = 'Nurali'
// console.log(ism)
// console.log(ism[0])



// Obekt

let ism = {
  ism: 'Nurali',
  vazni: 50
}
console.log(ism.ism)
console.log(ism.vazni)
console.log(ism['ism'])
console.log(ism['vazni'])

let Hamdam = {
  ism: "Hamdam",
  vazni: 45,
  hususiyatlari: {
    qoshi: 'Qora',
    boyi: 'O`rtacha',
    soch_rangi: 'Qizg`ishroq',
    kiyimlari: {
      futbolka: 'Qora',
      shim: 'Grey',
      poyavzal : 'Qora makas'
    },
    borPullari:[
      'O`nlik', 'Ikki minglik', 'Ellik minglik'
    ]
  }
}
console.log(Hamdam.hususiyatlari.soch_rangi)
console.log(Hamdam.hususiyatlari.kiyimlari.futbolka)
console.log(Hamdam.hususiyatlari.borPullari[2])


let royhat = [
  {
    ism: 'Hamdam',
    yoshi: 15
  },
  {
    ism: 'Danyor',
    yoshi: 13
  },
  {
    ism: 'Nurali',
    yoshi: 16
  },
  {
    ism: 'Ro`zimboy',
    yoshi: 16
  },
  {
    ism: 'Sherzod',
    yoshi: 13
  }
]

console.log(royhat[4].yoshi)
console.log(royhat[2].ism)
console.log(royhat[3].ism)
