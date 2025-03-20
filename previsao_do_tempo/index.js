//ef0b0973b783e0614ac87612ec04344b
//axios
const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const q = 'Itu'
const cnt = 2
const units = 'metric'
const lang = 'pt_br'
const protocolo = 'https'
const urlBase = 'api.openweathermap.org/data/2.5/forecast'
const url = `${protocolo}://${urlBase}?appid=${appid}&q=${q}`
console.log(url)