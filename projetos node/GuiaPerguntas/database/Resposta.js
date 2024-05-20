const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define('resposta',{
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },
    respostaRate: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

Resposta.sync({force: false}).then(()=>{
    console.log("tabela de respostas criada!")
})

module.exports = Resposta;