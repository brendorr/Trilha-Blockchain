// primeira coisa a se fazer é importar o express
const express = require("express");
const app = express();

app.get(`/`,function(req,res){
    res.send(`bem vindo ao site`) // toda rota, ao ser acessada, precisa retornar uma resposta
    // cuidado para nao dar resposta duas vezes

});// entre parenteses se trata da rota que esta sendo criada, o segundo argumento se trata de qual funcao vai ser executada quando essa rota for acessada
app.get(`/blog`,function(req,res){
    res.send(`bem vindo a essa nova rota`)
})
app.get(`/ola/:nome/:empresa?`,function(req,res){ // nome é um parametro, colocar um interroga faz com que o parametro seja opcional
    //req = dados enviados pelo usuario
    //res = resposta enviada pelo programa para o usuario
    res.send(`<h1>oi, ${req.params.nome}</h1>`)
    let query = req.query[`canal`]; // pegando um query param, que é basicamente um parametro que o usuario pode passar, mesmo que ninguem tenha perguntado nada pra ele
})

app.listen(4000,function(erro){// 4000 é a porta
    if(erro){
        console.log("ocorreu um erro")
    }
    else{console.log(`servidor iniciado com sucesso`)}
})