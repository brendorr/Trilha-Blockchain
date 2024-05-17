const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")

//database
connection
        .authenticate()
        .then(()=>{
            console.log("Conexao feita com sucesso")
        })
        .catch((msgerro)=>{
            console.log(msgerro)
        })


// estou dizendo ao express para usar o ejs como View Engine
app.set('view engine','ejs');
app.use(express.static(`public`)); // public é o nome da pasta onde fica os arquivos estaticos

//body parser
app.use(bodyParser.urlencoded({extended: false})) // vai decodificar os dados enviados pelo usuario
app.use(bodyParser.json());

// rotas
app.get("/",function(req,res){
    Pergunta.findAll({ raw: true }).then(perguntas =>{
        console.log(perguntas)
        res.render("index",{
            perguntas: perguntas
        });

    })
    

});

app.get("/perguntar",function(req,res){
    res.render("perguntar");

});

app.post("/salvarpergunta",function (req,res){
    let titulo = req.body.Titulo;
    let descricao = req.body.Descrição;

    console.log('Titulo:', titulo);
    console.log('Descricao:', descricao);

/*res.send(`Formulario recebido! // só pode uma resposta....
              titulo:${titulo}
              Descricao: ${descricao}`)

*/
    Pergunta.create({
        Titulo: titulo,
        Descricao: descricao

    }).then(()=>{
        res.redirect("/") // ao receber os dados do formulario, vai redirecionar o usuario para a pagina inicial "/"
    })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});