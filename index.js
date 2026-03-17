console.log("O JSON VOLTOU :// ....")

const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const conteudo = `<h1>Vai tbm HTML</h1>
    <p>Mais Texto</p>
    <ul><li>Item 1</li>
    <li>Item 1</li></ul>
    `
    res.send ('Bem-vindo ao universo dos heróis da Marvel e da DC')
})

app.get('/marvel', (req, res) => {
    res.send ('Bem-vindo ao universo dos heróis da Marvel')
})

app.get('/dc', (req, res) => {
    res.send ('Bem-vindo ao universo dos heróis da DC')
})

app.get('/heroi/:personagem', (req, res) => {
    const personagem = req.params.personagem
    if(req.params.personagem == "hulk"){
        res.send (req.params.personagem + ' é um herói da Marvel')
    }
    else if(req.params.personagem == "lexluthor"){
        res.send (req.params.personagem + ' é um vilão da DC')
    }
    else if(req.params.personagem == "homemdeferro"){
        res.send (req.params.personagem + ' é um herói da Marvel')
    }
    else if(req.params.personagem == "coringa"){
        res.send (req.params.personagem + ' é um vilão da DC')
    }
    else if(req.params.personagem == "superman"){
        res.send (req.params.personagem + ' é um herói da DC')
    }
    else if(req.params.personagem == "thanos"){
        res.send (req.params.personagem + ' é um vilão da Marvel')
    }
    else if(req.params.personagem == "batman"){
        res.send (req.params.personagem + ' é um herói da DC')
    }
    else if(req.params.personagem == "magneto"){
        res.send (req.params.personagem + ' é um vilão da Marvel')
    }
    else
    res.send ('Personagem: '+req.params.personagem)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})