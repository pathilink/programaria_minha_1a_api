const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Patrícia do Nascimento",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH-Da-qZkVPWQ/profile-displayphoto-shrink_400_400/0/1708137283536?e=1719446400&v=beta&t=T_fh87wVSu-tFdTRvos7F2IDAs0JmuhzQZsJmHw4E7A",
        minibio: "Data Analyst"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)