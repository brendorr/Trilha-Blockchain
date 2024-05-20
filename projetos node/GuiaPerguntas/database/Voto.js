const Sequelize = require("sequelize");
const connection = require("./database");

const Voto = connection.define('voto', {
    respostaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ipAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    voto: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Voto.sync({ force: false }).then(() => {
    console.log("Tabela de votos criada!");
});

module.exports = Voto;