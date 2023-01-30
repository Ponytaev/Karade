const { query, req, res } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const del = express();
del.listen(8080, () => console.log("Started"));

del.use(bodyParser.json());
const secure = (req,res,next)=>{
    const authorization = req.headers.authorization.split(" ");
    const authorization2 = authorization[1].split(":");
    const username = authorization2[0];
    const confirmPassword = authorization2[1];
    
    let shto = User.find(ss => ss.username == username)
    const hh = User.indexOf(shto);
    
    if (authorization[0].toLowerCase()!== 'bearer') {
    return res.json({message: "BadToken"})
    
    }
    if (shto==undefined) {
    res.json({res: "пользователь не совпадает"})
    
    }
    else if(User[hh].password!==confirmPassword) {
    res.json({res: "Пароль не совпадает"})
    }
    
    
    next();
    }
const News = [];
const User = [];
d = 0;
z = 0;
g = 0;

del.post("/auth/", (req,res)=>{
    username = req.headers.username;
    password = req.headers.password;
    confirmpassword = req.headers.confirmpassword;
    if (password !== confirmpassword){
        return res.json({message: "неверный пароль"})
    } else {
     d = Math.ceil(Math.random()*10);
     z = Math.ceil(Math.random()*10);
     g=d+z;
     User.push({username,password});
     res.json({d,z})
    }
    })

del.post("/auth/confirm",(req,res)=>{
    username = req.headers.username;
    verif = req.headers.verif;
    if (verif !== g){
        return res.json({message: "профиль не пордтвержден"})
    } else {
        return res.json({message: "профиль пордтвержден"})
    }
})
del.post("/news/", secure , (req,res)=>{
    title = req.headers.title;
    content = req.headers.content;
    News.push({title,content});
    return res.json({message: "новость добавлена"})
})
del.get("/news/", secure , (req,res)=>{
    return res.json(News)
})


// del.post("/frends/send", (req,res)=>{
//     username = req.headers.username;
//     password = req.headers.password;
//     confirmpassword = req.headers.confirmpassword;
    
//     })

// del.post("/auth/accept",(req,res)=>{
//     username = req.headers.username;
//     password = req.headers.password;
//     confirmpassword = req.headers.confirmpassword;
// }