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
  LembreteCriado: (lembrete) => {
    //acessar a baseConsolidada na "posição" id e associar a ela o próprio lembrete
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsolidada[lembrete.id]['observacoes']  || []
    observacoes.push(observacao)
    baseConsolidada[observacao.idLembrete]['observacoes'] = observacoes

  }
}

app.post('/eventos', (req, res) => {
  const evento = req.body
  //acessar o mapa de funções. a posição a ser acessada é o tipo do evento e passar como parâmetro os dados
  
  console.log(evento)
  res.end()
})


const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))