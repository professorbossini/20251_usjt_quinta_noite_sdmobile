const express = require('express')
const app = express()
app.use(express.json())

/*
{
  1: {
    id: 1,
    texto: 'Fazer cafe',
    observacoes: [
      {
        id: 1001,
        idLembrete: 1,
        texto: comprar acucar
      },
      {
        id: 1002,
        idLembrete: 1,
        texto: 'as 4h'
      }
    ]
  },
  2: {
    id: 2,
    texto: 'Fazer feira'
  }
}
*/
const baseConsolidada = {}

const funcoes = {
  LembreteCriado: (lembrete) => {},
  ObservacaoCriada: (observacao) => {}
}

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  res.end()
})


const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))