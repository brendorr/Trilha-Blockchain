const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

let DB = {
    games: [
        {
            id: 12,
            title: "BG 3",
            year: 2023,
            price: 256
        },



        {
            id: 23,
            title: "COD",
            year: 2012,
            price: 200
        },
        
        {
            id: 11,
            title: "WoW",
            year: 2019,
            price: 70
        }
    ]
}

// Middleware para parsing de JSON
app.use(express.json());

app.get("/games",(req,res)=>{
    res.statusCode = 200; // importante usar status code
    res.json(DB.games)
})
app.get("/games/:id", (req, res) => {
    let id = req.params.id;

    // Verifica se o id é um número válido
    if (isNaN(id)) { 
        console.log("Id passado não é um número");
        res.sendStatus(400); // Bad Request
    } else {
        id = parseInt(id, 10); // Converte id para número
        let game = DB.games.find(game => game.id === id); // Usa '===' para comparação

        if (game != undefined) {
            res.status(200).json(game); // Define status e envia resposta JSON
        } else {
            res.sendStatus(404); // Not Found
        }
    }

});
// Rota para adicionar um novo jogo
app.post("/games", (req, res) => {
    let { id, title, year, price } = req.body;

    // Verifica se todos os campos necessários estão presentes
    if (id == undefined || title == undefined || year == undefined || price == undefined) {
        res.sendStatus(400); // Bad Request
    } else {
        // Verifica se o ID já existe
        let existingGame = DB.games.find(game => game.id === id);
        if (existingGame) {
            res.sendStatus(409); // Conflict, ID já existe
        } else {
            // Adiciona o novo jogo ao banco de dados
            DB.games.push({ id, title, year, price });
            res.sendStatus(201); // Created
        }
    }
});

// Rota para deletar um jogo
app.delete("/games/:id", (req, res) => {
    let id = req.params.id;


    if (isNaN(id)) {
        console.log("Id passado não é um número");
        res.sendStatus(400); // Bad Request
    } else {
        id = parseInt(id, 10); 
        let gameIndex = DB.games.findIndex(game => game.id === id); 

        if (gameIndex != -1) {
            DB.games.splice(gameIndex, 1); 
            res.sendStatus(200); // OK
        } else {
            res.sendStatus(404); // Not Found
        }
    }
});

app.put("/games/:id", (req, res) => {
    let id = req.params.id;


    if (isNaN(id)) {
        console.log("Id passado não é um número");
        return res.sendStatus(400); // Bad Request
    } else {
        id = parseInt(id, 10); 
        let game = DB.games.find(game => game.id === id); 

        if (game != undefined) {
            // Atualiza os campos do jogo
            let { title, year, price } = req.body;
            if (title != undefined) game.title = title;
            if (year != undefined) game.year = year;
            if (price != undefined) game.price = price;

            res.status(200).json(game); // Retorna o jogo atualizado
        } else {
            res.sendStatus(404); // Not Found
        }
    }
});

app.listen(3000,() =>{
    console.log("API rodando")
})