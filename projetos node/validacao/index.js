let express = require("express");
let app = express;

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,(req,res)=>{
    console.log("Server on")
})