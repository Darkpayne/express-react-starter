const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

port = 5000;

app.get("/api", (req,res)=>{
    res.json({"user" : ["userOne", "userTwo"], 'hello' : 'im here'} )
})

app.listen(port, ()=>{ console.log(`server is runing on port ${port}`) })