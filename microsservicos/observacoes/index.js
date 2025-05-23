const axios = require('axios')
const express = require('express')
const {v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

/*
{
  1: [
    {
      id: 1000,
      idLembrete: 1,
      texto: 'comprar legumes'
    },
    {
      id: 1001,
      idLembrete: 1,
      texto: 'comprar frutas'
    }
  ],
}
*/

const baseObservacoes = {

}

app.get('/lembretes/:id/observacoes', (req, res) => {
  //devolver apenas a coleção de observações do lembrete cujo id se encontra na url
  //ou uma lista vazia caso ele ainda não possua observação alguma[]
  res.json(baseObservacoes[req.params.id] || [])
})

///lembretes/1/observacoes
app.post('/lembretes/:idLembrete/observacoes', async (req, res) => {
  const idObs = uuidv4()
  const idLembrete = req.params.idLembrete
  const { texto } = req.body
  const observacao = {
    id: idObs,
    idLembrete: idLembrete,
    texto: texto
  }
  const observacoes = baseObservacoes[idLembrete] || []
  observacoes.push(observacao)
  baseObservacoes[idLembrete] = observacoes
  await axios.post('http://localhost:10000/eventos', {
    tipo: 'ObservacaoCriada',
    dados: observacao
  })
  res.status(201).json(observacoes)
})

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  res.end()
})

const port = 5000
app.listen(port, () => {
  console.log (`Observações. Porta ${port}.`)
})