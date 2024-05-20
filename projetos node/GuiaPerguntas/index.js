const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")


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
app.get("/", function(req, res) {
    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => { // estou buscando as perguntas pelo id em ordem decrescente
        console.log(perguntas);
        res.render("index", {
            perguntas: perguntas
        });
    }).catch(err => {
        console.error(err);
        res.status(500).send("Ocorreu um erro ao buscar as perguntas.");
    });
});

app.get("/perguntar",function(req,res){
    res.render("perguntar");

});
app.get("/pergunta/:id",function(req,res){
    let id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){

           Resposta.findAll({
            where: {perguntaId: pergunta.id},
            order: [['id', 'DESC']]
           }).then(respostas =>{
            res.render("pergunta",
            {pergunta:pergunta,
            respostas:respostas
            }); // esse segundo argumento é pra enviar a pergunta pra pagina de view
           })

        }else{ // se chegar aqui, nao fora encontrado nenhuma pergunta com o id passado
          res.redirect("/");
        }
    })
})

app.post("/salvarpergunta",function (req,res){
    let titulo = req.body.Titulo;
    let descricao = req.body.Descrição;

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

app.post("/responder", function(req, res) {
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta; // Verifique se o nome do campo está correto e corresponde ao formulário

    Resposta.create({
        corpo: corpo, // Nome da propriedade deve ser minúsculo se o modelo foi definido assim
        perguntaId: perguntaId // Nome da propriedade deve ser consistente com o modelo
    }).then(() => {
        res.redirect(`/pergunta/${perguntaId}`); // Redirecionar para a página da pergunta específica
    }).catch(err => {
        console.error(err);
        res.status(500).send("Ocorreu um erro ao salvar a resposta.");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});