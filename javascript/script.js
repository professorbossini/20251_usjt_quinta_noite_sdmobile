

//promises
//1 + 2 + 3 + ... + (n - 2) + (n - 1) + n
//assincrona ou não bloqueante
// const calculoRapidinho = (numero) => {
//     //faça um if/else para, novamente, lidar com número negativos
//     if(numero > 0)
//         return Promise.resolve((numero * (numero + 1)) / 2)    
//     return Promise.reject("Não use números negativos")
    
// }
// const minhaPromise = calculoRapidinho(-10)
// minhaPromise.then(function(res){
//     console.log(`Deu certo: ${res}`)
// }).catch(erro => {
//     console.log(`Deu erro: ${erro}`)
// })
// const calculoDemorado = (numero) => {
//     const p = new Promise((resolve, reject) => {
//         //se o valor numero for negativo
//         //encerrar a computação demorada com erro, mensagem: "Não use valores negativos"
//         //caso contrário, mantenha o que já pronto
//         if(numero > 0){
//             let ac = 0
//             for(let i = 1; i <= numero; i++)
//                 ac = ac + i
//             resolve(ac)
//         }
//         else
//             reject("Não use valores negativos")
//     })
//     return p
// }
// const minhaPromise = calculoDemorado(2)
// minhaPromise.then((res) => {
//     console.log (`Deu certo: ${res}`)
// }).catch((erro) => {
//     console.log(`Deu errado: ${erro}`)
// })
// console.log('Script principal terminando...')
//síncrona ou bloqueante
// const  calculoDemorado = (numero) => {
//     let ac = 0
//     for(let i = 1; i <= numero; i++)
//         ac += i // ac = ac + i
//     return ac

// }

// const resultado = calculoDemorado(10)
// console.log(resultado)


//inferno de callbacks (callback hell)
// const fs = require('fs')
// const abrirArquivo = () => {
//     const nomeArquivo = "arquivo.txt"
//     //processamento IO-Bound
//     const exibirConteudo = (erro, conteudo) => {
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Conteúdo: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }   
//                 else{
//                     console.log("Salvou o dobro")
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//             console.log('Função exibirConteudo terminou')
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo()
// console.log('Script principal terminou')

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina', 'ana claudia']
//encontrar no MDN (busque no google por mdn js list) a função que responde se pelo menos um elemento tem determinada propriedade
// const peloMenosUmComecaComA = nomes.some(nome => nome.startsWith('A'))
// console.log(peloMenosUmComecaComA)
// const todosComecamComA = nomes.every(nome => nome.startsWith('A'))
// console.log(todosComecamComA)

//quero um resultante composto pelas iniciais de cada elemento do nomes original
//pesquisar sobre a função map no mdn, jogue no google mdn js map

// const iniciais = nomes.map(function(nome){
//     return nome[0]
// })

// console.log(iniciais)
//escreva um algoritmo que produza uma lista de nomes que contenha somente aqueles que começam com a letra A
//programação imperativa
// const resultante = nomes.filter(n => n.startsWith('A') || n.startsWith('a'))
// console.log(resultante)
// const resultante = []
// for (let i = 0; i < nomes.length; i++){
//     // if(nomes[i].startsWith('A') || nomes[i].startsWith('a')){
//     if(nomes[i].toLowerCase().startsWith('a')){
//         resultante.push(nomes[i])
//     }
// }
// console.log(resultante)

//JSON: JavaScript Object Notation
//Objetos literais Javascript
//uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 121.
//uma concessionaria que tem CNPJ e endereço. Ela possui alguns carros em estoque. Cada um deles tem marca, modelo e ano de fabricação.

//Uma calculadora que realiza as operações de soma e subtração, cada qual envolvendo dois operandos
//mostrar a definição da calculadora. A função que faz soma tem que ser regular e sem nome. E a função que faz subtração, tem que ser uma arrow function e não pode ter o corpo delimitado por {}

//mostrar como as funções são utilizadas, somando 2 e 3, subtraindo 3 de 5

// let calculadora = [
//     function(a, b){ return a + b },
//     (a, b) => a - b
// ]

// // console.log(calculadora[0](2, 3))
// // console.log(calculadora[1](5, 3))

// // const soma = calculadora[0]
// // const subtracao = calculadora[1]
// const [soma, subtracao] = calculadora 

// console.log(soma(2, 3))
// console.log(subtracao(5, 3))


// let concessionaria = {
//     cnpj: '12.345.678/0001-90',
//     endereco:{
//         logradouro: 'Rua B',
//         bairro: 'Vila J',
//         numero: 1001
//     },
//     veiculos: [
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             anoFabricacao: 2010
//         },
//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             anoFabricacao: 1980
//         },
//         {
//             marca: 'BMW',
//             modelo: 'X1',
//             anoFabricacao: 2024
//         }     
//     ]
// }


// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 121,
//         bairro: "Vila J",
//         cidade: {
//             nome: 'Itu',
//             populacao: 200000
//         }
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['logradouro'])
// console.log(pessoa['endereco'].numero)
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     logradouro: 'Rua B',
//     numero: 121
// }
//uma pessoa se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log(`Me chamo ${pessoa.nome}`)
// console.log('Tenho ' + pessoa['idade'] + " anos")

// // //closure
// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log ('Olá, ' + nome)
//     }
// }

// let olaResult = ola()

// olaResult()

// function saudacoesFactory (saudacao, nome){
//     return function(){
//         console.log(saudacao + ", " + nome)
//     }
// }
// let olaJoao = saudacoesFactory('ola', 'João')

// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()


// function f(){
//     let nome = 'João'
//     function g(){
//         const a = 2
//         console.log(nome)
//     }
//     g()
// }
// f()


// //é uma função de alta ordem
// function f (funcao){
//     //chama a funcao
//     funcao()
// }
// //é uma função de alta ordem
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada pela g')
//         return () => console.log('Oi')
//     }
//     return outraFuncao
// }

// f(function(){
//     console.log('Estou sendo passada para a f')
// })

// // const gResult = g()
// // gResult()

// // g()()

// f(g()())

// // let umaFuncao = function(){
// //     console.log('Fui armazenada em uma variável')
// // }

// // umaFuncao()

// //1. funções regulares
// //2. arrow functions
// // const somar = (a, b, c) => a + b + c
// // console.log(somar(1, 2, 3))
// // const ehPar = n => n % 2 === 0
// // console.log(ehPar(2))
// // const dobro = valor => valor * 2
// // console.log(dobro(5))
// // const hello = () => console.log('Hello')
// // hello()
// // () => {}
// //funções anônimas
// // const triplo = function(n = 5){
// //     return 3 * n
// // }
// // console.log(triplo(17))
// // console.log(triplo())
// // console.log(triplo(undefined))
// // const dobro = function(n){
// //     return 2 * n
// // }

// // console.log(dobro(3))


// // function soma(a, b){
// //     return a + b
// // }

// // const a = 2, b = 3
// // const res = soma(a, b)
// // console.log(`${a} + ${b} = ${soma(a, b)}`)


// // function hello(){
// //     console.log('oi')
// // }
// // hello(undefined)

// // function hello(nome){
// //     console.log('Oi, ' + nome)
// // }

// // hello('Ana')

// // v1 = []
// // console.log(v1.length)
// // v1[0] = 3.4
// // console.log(v1.length)
// // v1[10] = 'abc'
// // console.log(v1.length)
// // console.log(v1)
// // for(let i = 0; i < v1.length; i++)
// //     console.log(v1[i])

// //console.log([] == [])
// // console.log([] == false)
// // console.log(null == undefined)
// // console.log(null == null)
// // console.log(1 == [1])
// // console.log(true == 2)
// // console.log(true == 1)
// // console.log(1 == 1)
// // console.log(1 == '1')
// // console.log(1 === 1)
// // console.log(1 === '1')
// //coerção
// // const n1 = 2
// // const n2 = '3'
// // //coerção implícita
// // const n3 = n1 + n2
// // console.log(n3)
// // //coerção explícita
// // const n4 = n1 + Number(n2)
// // console.log(n4)
// //variáveis com var
// // var idade = 18
// // let nome = 'João'
// // console.log('Oi, ' + nome)
// // if(idade >= 18){
// //     //hoist: içamento
// //     console.log('Parabéns, ' + nome + ". Você pode dirigir")
// // }
// // console.log('Até mais, ' + nome)
// // var linguagem = 'Javascript'
// // console.log('Aprendendo ' + linguagem)
// // var linguagem = 'Java'
// // console.log('Aprendendo ' + linguagem)
// // var c = 2 + 3
// // console.log(c)
// // var d = 'abcd'
// // console.log(d)
// //variáveis com let
// // let a = 2
// // console.log(a)
// // a = 3
// // console.log(a)
// // a = 'abcd'
// // console.log(a)
// //declaração de constantes
// //java: String nome = "José";
// // const nome = 'José'
// // console.log(nome)
// // nome = 'Pedro'
// // console.log(nome)