const express=require('express');
const app = express();
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog');


app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');


app.use('/articles',articleRouter)

app.get("/" , function(req,res){

    const articles = [{

        title:"Test aarcticle",
        createdAt:new Date(),
        description:'test description'

    },{

        title:"Test aarcticle 2",
        createdAt:new Date(),
        description:'test description'

    } ]

    res.render('articles/index',{articles:articles});

});













app.listen(5000,function(){
    console.log("server at 5000")
});