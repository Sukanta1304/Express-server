const express= require("express") ;
const dns= require("dns");
const fs= require("fs")

const app= express() ;
app.use(express.json());

app.post("/getmeip",(req,res)=>{
var website= req.body.website_name ;
var ipAddress= dns.lookup(website , function(error,addresses,family){
console.log(addresses) 
})
res.send(ipAddress)
});

app.post("/products/create",(req,res)=>{
    let payload= JSON.stringify(req.body) ;
    let data= fs.readFileSync("./products.json",{encoding:"utf-8"});
    let products= JSON.parse(data);
    let new_product= [...products,JSON.parse(payload)];
    fs.writeFileSync("./products.json", JSON.stringify(new_product))
    res.send("product created")
});

app.get("/products",(req,res)=>{
    let data= fs.readFileSync("./products.json",{encoding:"utf-8"});
    let products= JSON.parse(data);
    res.send(products)
});
app.put("/products/:id",(req,res)=>{
    let {id}= req.params;
    let {title}= req.body ;
    let data= fs.readFileSync("./products.json",{encoding:"utf-8"});
    let products= JSON.parse(data);
    let product= products.find((p)=> p.id==id);
    product.title= title ;
    // res.json(product);
    let Products= [...products]
    fs.writeFileSync("./products.json",JSON.stringify(Products))
    res.send("product updated")
})
app.delete("/products/:id",(req,res)=>{
    let {id}= req.params;
    let data= fs.readFileSync("./products.json",{encoding:"utf-8"});
    let products= JSON.parse(data);
    let index= products.findIndex((p)=> p.id===parseInt(id));
    console.log(index)
    if(index>0){
        products.splice(index,1)
        //let Products= [...products];
        fs.writeFileSync("./products.json", JSON.stringify(products))
        res.send("deleted successfully")
    }else{
        res.status(404).send("error")
    }
})
app.listen(7000,()=>{
    console.log("server started")
})