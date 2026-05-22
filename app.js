const express = require("express");
const app =express();

app.get('/',(req,res)=>{
res.send("github actions pipeline workflowskfbwfheifheirfhierufhieurhfieruj");
});

app.listen(3000,()=>{
console.log("server listening on port 3000");
});
