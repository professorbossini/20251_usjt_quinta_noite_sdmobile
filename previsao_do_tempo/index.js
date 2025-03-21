//async/await
const fatorial = (n) => {
    //n! = n * (n - 1) * (n - 2) * ... * 1
    if(n < 0)
       return Promise.reject("Valores positivos apenas")
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
    return Promise.resolve(res)
}
// a construção async/await substitui a construção then/catch
const chamadaComAsyncAwait = async () =>{
    const f1 = await fatorial(5)
    console.log(f1)
    try{
        const f2 = await fatorial(-1)
        console.log(f2)
    }
    catch(err){
        console.log(err)
    }
}
chamadaComAsyncAwait()
// function chamadaComThenCatch(){
//     fatorial(5)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

//     fatorial(-1)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }
// chamadaComThenCatch()



// async function hello(nome){
//     return `Oi, ${nome}`
// }

// const resultado = hello('Ana')
// resultado.then(texto => console.log(texto))
// function hello(nome){
//     return new Promise((resolve, reject) => {
//         resolve(`Oi, ${nome}`)
//     })
// }
// const res = hello('Ana')
// //exiba o texto Oi, Ana
// res.then(texto => console.log(texto))

//síncrono
// function hello(nome){
//     return `Oi, ${nome}`
// }
// const res = hello('Ana')
// console.log(res)







// //ef0b0973b783e0614ac87612ec04344b
// //axios
// const axios = require('axios')
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const q = 'Itu'
// const cnt = 2
// const units = 'metric'
// const lang = 'pt_br'
// const protocolo = 'https'
// const urlBase = 'api.openweathermap.org/data/2.5/forecast'
// const url = `${protocolo}://${urlBase}?appid=${appid}&q=${q}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)

// axios.get(url)
// .then((res) => {})
// .catch((err) =>{})

// // axios.get(url).then((res) => {
// //     axios.get(url2).then((res2) => {
// //         axios.post(url3).then((res3) => {
// //             axios.get(url4).then((res4) => {

// //             })
// //         })
// //     })
// // })

// axios.get(url)
// .then((res) => {
//     const resposta = res.data
//     const previsoes = resposta.list
//     //a partir da resposta, mostrar a descrição das condições da segunda previsão que se encontra na lista
//     // console.log(resposta.list[1].weather[0].description)
//     //iterar (pesquise sobre o for..of) sobre as previsões exibindo, para cada uma:
//     /*
//     data (usar a classe Date para formatar)
//     temperatura minima
//     temperatura maxima
//     humidade relativa do ar
//     descricao
//     */
//    for(let previsao of previsoes){
//        console.log(previsao.dt)
//        console.log(new Date(previsao.dt * 1000).toJSON())
//        console.log(`Min: ${previsao.main.temp_min}`)
//        console.log(`Max: ${previsao.main.temp_max}`)
//        console.log(`Hum: ${previsao.main.humidity}`)
//        console.log(`Desc: ${previsao.weather[0].description}`)
//    }
   
// })
// .catch((err) => {

// })

// console.log("Mais coisas...")