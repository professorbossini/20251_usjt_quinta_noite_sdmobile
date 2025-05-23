const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//POST /eventos e uma funcionalidade
//defina esse endpoint
app.post('/eventos', async (req, res) => {
  const evento = req.body
  console.log(evento)
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:5000/eventos', evento)
  }
  catch(e){}
  res.end()
})

const port = 10000
app.listen(port, () => console.log(`Barramento. Porta ${port}.`))
