var express = require("express");
let app = express();

app.use(express.json());

app.listen(8000, ()=>{
    console.log("I am ready to do operation!");
})