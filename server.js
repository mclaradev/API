import express from 'express'

const app = express()
app.use(express.json())

const users = [];

app.post('/users', (req, res) => {
    console.log(req.body)
    console.log('Servidor rodando na porta 3000')
    res.send('ok, deu certo!')
})

app.get('/users', (req, res) => {
    console.log('Servidor rodando na porta 3000')
    res.send('ok, deu bom!')
})

app.listen(3000)