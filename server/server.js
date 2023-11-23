
/** source/server.ts */
const http=require("http")
const express=require("express")
const morgan=require("morgan")
// import express, { Express } from 'express';
// import morgan from 'morgan';
// const app=require("./source/routes/posts.js");
require("./source/db/conn.js")
const cors=require("cors")
const app = express();
/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */


var bodyParser = require('body-parser');

// configure the app to use bodyParser()

// app.set("view engine","ejs")
// app.set('views', __dirname + '/views')
app.use(bodyParser.json());

/** RULES OF OUR API */
// app.use((req, res, next):any => {
//     // set the CORS policy
//     res.header('Access-Control-Allow-Origin', '*');
//     // set the CORS headers
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
//     // set the CORS method headers
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
//         return res.status(200).json({});
//     }
//     next();
// });

/** Routes */
const controller=require("./source/controllers/posts.js")
let UserObj = require("./source/models/User.js")
let CartObj = require("./source/models/Cart.js")
let ProductObj=require("./source/models/Product.js")
let ImageModel=require("./source/models/Image.js")


app.use(express.json({limit:"10mb"}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit:"10mb"
}));
app.use(express.urlencoded({limit:"10mb",extended:true,parameterLimit:50000}))

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"]
}))

app.get('/', (req,res)=>{
    res.send("Home");
})
          
app.get('/finduser', controller.finduser);
app.get('/finduseremail', controller.finduserByemail);

app.post('/adduser',controller.adduser)
app.post('/upload',async(req,res)=>{
    const tempDate=Date.now()
    const ImageDataStored = ImageModel({
      imgName: tempDate,
      imgData: req.body.imageData,
      joindate:tempDate
    });
    await ImageDataStored.save().then((result) => {
      console.log("image stored!!");
      res.send({ message: tempDate });
    });
    
})
app.get('/images/:imgname',async(req,res)=>{
        const ImageObj = await ImageModel.findOne({ imgName: req.params.imgname });
        console.log(ImageObj)
        const imgdata = ImageObj.imgData.split(",")[1]; // Extract the base64 data part
        const imageBuffer = Buffer.from(imgdata, "base64");
      
        res.setHeader("Content-Type", "image/png");
        res.end(imageBuffer);
})

// app.put('/updatecart',controller.updateCart)
app.post('/postproduct',controller.postProduct)
app.get('/products',controller.getProducts)
app.get('/products/:id',controller.getSingleProduct)


/** Error handling */
// app.use((req:any, res:any, next:any) => {
//     const error = new Error('not found');
//     return res.status(404).json({
//         message: error.message
//     });
// });

/** Server */
const httpServer = http.createServer(app);
const PORT = process.env.PORT ?? 5000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
