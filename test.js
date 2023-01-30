const { query, req, res } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const del = express();
del.listen(8080, () => console.log("Started"));
d = 0;
z = 0;
del.post("/auth/", (req,res)=>{
   
     d = Math.ceil(Math.random()*10);
     z = Math.ceil(Math.random()*10);
     res.json({d,z})
    })