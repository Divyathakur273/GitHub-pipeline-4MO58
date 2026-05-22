const express = require("express");
const app =express();

app.get('/',(req,res)=>{
res.send("github actions pipeline workflows ");
});

app.listen(3000,()=>{
console.log("server listening on port 3000");
});
