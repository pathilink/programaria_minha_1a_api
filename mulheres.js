const express = require("express") // iniciando express
const router = express.Router() // configurando 1a parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() // iniciando app
app.use(express.json())
const porta = 3333 // criando porta

// criando lista inicial de mulheres
const mulheres = [{
        id: '1',
        nome: "Patrícia do Nascimento",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH-Da-qZkVPWQ/profile-displayphoto-shrink_400_400/0/1708137283536?e=1719446400&v=beta&t=T_fh87wVSu-tFdTRvos7F2IDAs0JmuhzQZsJmHw4E7A",
        minibio: "Data Analyst"
    },
    {
        id: '2',
        nome: "Patrícia",
        imagem: "https://avatars.githubusercontent.com/u/22615023?v=4",
        minibio: "Data Analyst | Python | SQL | R"
    }
]

// GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

// POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

// PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

// DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

// PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei rota DELETE /mulheres/:id
app.listen(porta, mostraPorta) // servidor ouvindo a porta