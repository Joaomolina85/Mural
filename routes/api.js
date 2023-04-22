const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const posts = require('../model/posts');
const router = express.Router();
const options ={
    origin: 'http://192.168.0.15:3000'
}

router.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()));
})

router.use(cors(options));

router.post("/new",bodyParser.json(), (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title,description);

    res.send("Post criado com sucesso");
})

// router.delete("/delete", (req,res)=>{
//     let id = req.body.id;

// })

module.exports = router;