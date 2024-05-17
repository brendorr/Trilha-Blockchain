// sugerido nomear arquivos de model com inicial maiuscula

const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    Titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Descricao:{
        type: Sequelize.TEXT,
        allowNull:false
    }
});

Pergunta.sync({force: false}).then(()=>{
    console.log("tabela criada!")
})

module.exports = Pergunta;