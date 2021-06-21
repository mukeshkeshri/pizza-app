const express=require("express")
const app=express()
const ejs=require("ejs")
const path=require('path')
const bodyParser= require('body-parser');
const Menu=require('./model/menu');

const mongoose=require('mongoose')


/*const expresslayout=require('express-ejs-layouts') 

app.use(expresslayout);*/


mongoose.connect('mongodb://localhost:27017/pizza', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
{
    console.log('database connected')
})
.catch((e)=>{console.log(e)});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('views' , path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname ,'/public')));


app.get('/',(req,res)=>{
    res.render('home');
})

app.post('/',(req,res)=>{

    console.log(JSON.stringify(req.body));
    
})

app.get('/user',(req,res)=>
{
    console.log(req.query)
    console.log("/user is hit")
    
    Menu.find().then((pizzas)=>{

        console.log(pizzas);
        
        res.render('user',{pizzas:pizzas});

    })

})

app.get('/user/cart',(req,res)=>
{
    console.log(req.query)
    res.render('cart');
})




app.listen(3000,()=>{
 console.log("Listening to port");
})
