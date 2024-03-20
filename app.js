const express=require('express')
const app=express()
const path=require('path')
const mongoose=require('mongoose')
const PORT=5555;
const hbs=require("hbs")

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(path.join(__dirname,'public')))
app.use("/",require("./routes/product"))

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
.then(()=>{
    app.listen(PORT,()=>{
    console.log("http://localhost:"+ PORT)})
})