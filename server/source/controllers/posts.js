// import { Request, Response, NextFunction } from 'express';
// import axios, { AxiosResponse } from 'axios';
let UserObj = require("../models/User.js")
let CartObj = require("../models/Cart.js")
let ProductObj=require("../models/Product.js")
// const path = require('path')
// const multer = require('multer')



require("../db/conn.js")

// interface Post {
//     userId: Number;
//     id: Number;
//     title: String;
//     body: String;
// }



const home = (req, res, next) => {
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress);
    
    return res.send(ipAddress);
};



const finduser = async (req, res) => {
    try {
        console.log(req.query);
        var foundUser = await UserObj.find({ email: req.query.email, password:req.query.password });
        // var foundCart=await CartObj.find({email:req.query.email});
        console.log(foundUser)
        // console.log(foundCart)
    } catch (e) {
        res.send(e)
    }
    return res.status(200).send({ user: foundUser });
}

const finduserByemail = async (req, res) => {
    try {
        console.log(req.query);
        var foundUser = await UserObj.find({ email: req.query.email});
        // var foundCart=await CartObj.find({email:req.query.email});
        console.log(foundUser)
        // console.log(foundCart)
    } catch (e) {
        res.send(e)
    }
    return res.status(200).send({ user: foundUser });
}


// const updateCart=async(req:any,res:any)=>{

//     try{
//         console.log(req.body)
//     console.log("Done")
//     console.log(req.body.email)
//     console.log(req.body.cart)
//     const id=req.body._id
//         // var updatedCart=await CartObj.find({email:req.body.email});
//         var foundCart2=await CartObj.find({email:req.body.email});
//         console.log(foundCart2)
//         foundCart2[0].insertMany(req.body.cart);
//         console.log(foundCart2)
//         foundCart2.save()
//         console.log(foundCart2)
//         //     console.log("US",us)
//     //     us[0].cart.insertMany(req.body.cart)
//     // .then(function(docs:any) {
//     //      // do something with docs
//     //      console.log(docs)
//     // })
//     // .catch(function(err:any) {
//     //     // error handling here
//     //     console.log(err)
//     // })
//     console.log("US",foundCart2)

//         // var updatedCart=await CartObj.find({email: req.body.email});
//         // console.log(updatedCart)
//     }catch(e){
//         return res.send(e)
//     }
//     return res.status(200).send({data:foundCart2});
// }

// const uploadImage2 = (req, res, next) => {
//     return res.render("upload")
// };

const uploadImage = (req, res) => {
    // get some posts
    console.log(req)
    // console.log(req.file)
    return res.status(200).json({
        message: "Done"
    });
};


const adduser = async (req, res, next) => {
    try {
        console.log(req.body)

        const addUser = new UserObj(req.body)

        var insertuser = await addUser.save()
        console.log(insertuser)
        // res.send(insertuser)

    } catch (e) {
        res.send(e)
    }
    // return response
    return res.status(200).send({
        message: insertuser
    });
};

const postProduct = async (req, res, next) => {
    
    console.log(req.body)

    const addProduct=new ProductObj(req.body)
    console.log(addProduct)
    var insertproduct=await addProduct.save()
    console.log(insertproduct)
    // return response
    return res.status(200).json({
        message: 'post added successfully',
        product:insertproduct
    });
};

const getProducts=async (req, res, next) => {
    
    var products=await ProductObj.find().select({ "id":1,"name":1,"company":1,"category":1,"type":1,"style":1,"color":1,"image":1,"actual_price":1,"description":1,"discount_rate":1,"reviews":1,"stars":1,"sizes":1,"new":1,"discount_price":1,"_id":0});


    const jsonData=JSON.stringify(products)
   const simpleData=JSON.parse(jsonData)

   const productData=simpleData.map((curProduct)=>{
    const tempCurProduct=curProduct.image[curProduct.image.length-1];
    curProduct={...curProduct,image:tempCurProduct}
    console.log(curProduct)
    return curProduct
})

    console.log(productData)

    return res.status(200).json(
        productData
    );
};


const getSingleProduct= async (req, res, next) => {
    // get the product id from req.params
    let id = req.params.id;
    console.log(id)
    const singleProduct=await ProductObj.find({id:id}).select({"_id":0,"__v":0})
    console.log(singleProduct[0])
    return res.status(200).json(singleProduct[0]);
};

module.exports= { home, adduser, finduser, uploadImage,postProduct,getProducts,getSingleProduct,finduserByemail };
