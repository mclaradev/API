import express from 'express'

const app = express()

const users = [];

app.post('/users', (req, res) => {
    console.log(req)
    console.log('Servidor rodando na porta 3000')
    res.send('ok, deu certo!')
})

app.get('/users', (req, res) => {
    console.log('Servidor rodando na porta 3000')
    res.send('ok, deu bom!')
})

app.listen(3000)