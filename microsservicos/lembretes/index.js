//localhost:4000/lembretes
//endpoint: método do protocolo HTTP, padrão de acesso, funcionalidade
const express = require('express')
const app = express()
app.use(express.json())
/*
{
  1: {
    id: 1,
    texto: 'Fazer café'
  },
  2: {
    id: 2,
    texto: 'Ir à feira'
  }
}
*/
const baseDeLembretes = {}
let id = 1
//GET /lembretes (req, res) => {}
app.get('/lembretes', (req, res) => {
  res.json(baseDeLembretes)
})

//POST /lembretes
//devolver o texto "cadastrando um lembrete..."
app.post('/lembretes', (req, res) => {
  const texto = req.body.texto
  const lembrete = {
    id,
    texto
  }
  baseDeLembretes[id] = lembrete
  id = id + 1// id += 1 id++ ++id
  res.json(baseDeLembretes)
})



const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}`)
})

