'use strict'

//Pengenalan Ajax Request
//request pada JS itu disebut AJAX yg dimana singkatan dari asynchronus,javascrpt,and,XML
// request yang dimaksud dengan ajax ini,kita akan melakukan request hanya data yg kita buthkan saja dan biasanya data ini memiliki
// format JSON


//Mengenal Api
// interaksi komunikasi data antar software yg nnt bakal diolah lagi utk tmpil di broswer 
//API dapat direspon menggunakan tipe data JSON,XML.
//Intinya API itu,kita melakukan request kepada server lalu server ini merespon dan mengmbalikan berupa data dengan tipe
//API ADALAH INTERAKSI KOMUNIKASI DATA ANTAR SOFTWARE,INTERACE,LAYANAN,YG NNT PERLU DIOLAH LAGI AGAR BISA DITAMPIL DI SEBUAH WEBSITE
//JSON DAN XML


//Apa Itu Json
//JSON -> JS,OBJECT,&NOTATION
// https://jsonformatter.org/
// const data = `{
//     "ticker": {
//         "base":"BTC",
//         "target":"IDR",
//         "price":"1000000000"
        
//     },
//     "timestamp" : 12345678,
//     "succes": true,
//     "error": ""
// }`

//merubah JSON menjadi objek biasa di JS
// const tes = JSON.parse(data)
// console.log(tes.ticker.base)

//mengubah objek biasa JS menjadi JSON agar di terima diserver
// const person = {
//     firstName: 'Bagus',
//     lastName: 'Sadewo',
// }
// const replace = JSON.stringify(person)
// console.log(replace)



//Lebih Mudah Akses Web Api Dengan Postman Dan Hoppscotch
//ini ada tools yabg dimana  utk mempermudah request kedalam web API / didalam service
//https://www.postman.com/
//hoppscotch.io

//menganbil data dari server
//melihat response dari web API yang kita request

//tools link utk melakukan request
// https://catfact.ninja/
//https://swapi.dev/
//https://pokeapi.co/




//Mengenal Http Verb Atau Http Method
//kalo methodnya beda dengan apa yg kita request maka dia akan muncul not found

//Penjelasan Kode Angka Dari Respon Http
//berisi sumber status jika mengalami sesuatu
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100




// Mengenal Base Url Dan Query String Di Web Api
// ada cara menambahkan parameter dalam url pada API misalnya
// menggunakan :, {{}}, <>
   
// //https://www.tvmaze.com/api (opeen source API juga)

// // pada Query String ?sort=desc&price=1000
// berati artinya mempunyai key sort valuenya desc dan 
// key price value = 1000







//Mengenal Data Di Http Header

// ada beberapa API yang perlu menambahkan data Headers

//dalm API kita bisa memformat atau meresponse API tersebut menggunakan format HTML,JSON,DAN PLAIN
//https://icanhazdadjoke.com/api -> itu open sourcenya 

//data headers juga berpengaruh kalau misalnya kita mengirim sesuatu ke body,terus kita mau ngirimnya dengan tipe apa

// Misalnya Keynya :Content-Type, Valuenya : application/JSON


//Melakukan Request Dengan Xmlhttprequest
// 1.cara original utk mengirim request via javascript
// 2.tidak mendukung promises,jadi ya bisa kemungkinan call back hell
// 3.namanya susah diketik,aneh besar kecil ndak jelas

// const req = new XMLHttpRequest()

// req.onload = function() {
//     const data = JSON.parse(this.responseText)
//     console.log(data)
//     console.log(data.name)
// }

// req.onerror = function() {
//     console.log('Error', this)
// }

// // request ke endpoint API
// req.open('GET', 'https://swapi.dev/api/people/1', true)
// req.setRequestHeader('Accept', 'application/json')
// req.send()


//cara ini kurang efisien ada cara lain/terbaru yg dimiliki function JS
//Yaitu Melakukan Request Dengan Fetch
// 1.cara baru melakukan request via JS
// 2.mendukung Promise
// 3.tidak mendukung di internet exploler.ini udh jarang ada yg make itu broswer

// fetch('https://swapi.dev/api/people/1')
// .then((res) => {
//     if(!res.ok) {
//         throw Error('data fetch tidak ditemukan')
//     }
    
//     return res.json()
// })

// .then((data) => {
//     console.log('json 1',data)
//     //ambil data ke 2
//     return fetch('https://swapi.dev/api/people/2')
// })
// .then((res) => {
//     console.log('INI DATA KE 2 ')
//     if(!res.ok) {
//         throw Error('data fetch tidak ditemukan')
//     }
    
//     return res.json()
// })
// .then((data) => {
//     console.log('json 2',data)
// })
// .catch((err) => {
//     console.log('error',err)
// })

//ada cara lagi menggunakan asychronus function
// const loadPeople = async () => {
//     try{

//         const res = await fetch('https://swapi.dev/api/people/1')
//         const data = await res.json()
//     console.log(data)

//     //kalau mau ngambil 2 data
//     const res2 = await fetch('https://swapi.dev/api/people/2')
//     const data2 = await res2.json()
//     console.log(data2)
// } catch(err){
//     console.log('ERROR',err)
// }
// }

// loadPeople()

// Melakukan Request Dengan Library Axios
// Axios:Library pihak ketiga utk melakukan request http

// axios.get('https://swapi.dev/api/peopdasdsale/1').then((res) => {
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err)
//     alert(err.message)
// })

// AXIOS VERSI ASYN AWAIT

// const loadPeople = async (id) => {
//     try{

//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res.data)

// } catch(err){
//     console.log(err)
//     console.log(err.message)
//     console.log(err.response.status)
//     console.log(err.response.data)
// }
// }
// loadPeople(1)

//Menambahkan Data Headers Di Request Menggunakan Axios

// const jokes = document.querySelector('#jokes')
// const button = document.querySelector('button')

// const addJoke =async () => {
//     const jokeText = await getJokes()
//     const newLI =document.createElement('LI')
//     newLI.append(jokeText)
//     jokes.append(newLI)
// }


// const getJokes = async () => {
//     try {
//         const config = {
//             headers: {
//                 Accept: 'application/json',
//             },
//         }
//         const res = await axios.get('https://icanhazdadjoke.com/',config)
//         return res.data.joke
//     }catch(err) {
//         return 'No jokes AVAILABLE'
//     }
// }

// getJokes()

// button.addEventListener('click', addJoke)



//Menampilkan Daftar Acara Tv Dengan Axios

const form = document.querySelector("#search-form")

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    document.querySelectorAll('img').forEach((img) => img.remove())
    const keyword = form.elements.query.value
    const config = {
        params: {
            q: keyword},
    }
    const res = await axios.get('http://api.tvmaze.com//search/shows',config)
    // console.log(res.data)
    getImages(res.data)
    form.elements.query.value = ''
}) 

const getImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('img')
            img.src=result.show.image.medium
            document.body.append(img)
        }
    }
}