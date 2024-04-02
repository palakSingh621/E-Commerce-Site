const express=require('express')
const Product=require('../model/Product')
const router=express.Router();
//route for getting all products
router.get("/products",async(req,res)=>{
    let products=await Product.find()
    res.render("allProducts",{products})
})
//route to get a single product
router.get("/product/:id",async(req,res)=>{
    let id=req.params.id
    let product=await Product.findById(id).populate('reviews')
    console.log(product)
    res.render("productPage",{product})
})

router.get("/addproduct",(req,res)=>{
res.render("addProduct")
})

router.post("/addProduct",async(req,res)=>{
    const {name,price,img,desc}=req.body
    await Product.create({name, price, img, desc})
    res.redirect("/products")
})
module.exports=router;