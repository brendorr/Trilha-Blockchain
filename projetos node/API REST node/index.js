const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./database/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.sync()
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida.");
    })
    .catch(err => {
        console.error("Não foi possível conectar ao banco de dados:", err);
    });

app.get("/games", async (req, res) => {
    try {
        const games = await db.games.findAll();
        res.status(200).json(games);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.get("/games/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    try {
        const game = await db.games.findByPk(id);
        if (game) {
            res.status(200).json(game);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
});

app.post("/games", async (req, res) => {
    const { title, year, price } = req.body;

    if (!title || !year || !price) {
        return res.sendStatus(400);
    }

    try {
        const game = await db.games.create({ title, year, price });
        res.status(201).json(game);
    } catch (error) {
        res.sendStatus(500);
    }
});

app.delete("/games/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    try {
        const game = await db.games.findByPk(id);
        if (game) {
            await game.destroy();
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
});

app.put("/games/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    try {
        const game = await db.games.findByPk(id);
        if (game) {
            const { title, year, price } = req.body;
            if (title !== undefined) game.title = title;
            if (year !== undefined) game.year = year;
            if (price !== undefined) game.price = price;

            await game.save();
            res.status(200).json(game);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
});

app.listen(3000, () => {
    console.log("API rodando na porta 3000");
});
