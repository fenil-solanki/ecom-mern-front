// const mongoose=require("mongoose")
// mongoose.set('useFindAndModify', false);

// mongoose.connect("mongodb+srv://solankifenil21:eVwQ6aLZTula6POG@fenilapi.yiibxdt.mongodb.net/",
// {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
//   }).then(()=>{
//     console.log("Connection successfully.")
// }).catch((e)=>{
//     console.log("No connection"+e)
// })

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://solankifenil21:eVwQ6aLZTula6POG@fenilapi.yiibxdt.mongodb.net/ecommerce-project", { useUnifiedTopology : true, useNewUrlParser : true , }).then(() => {
    console.log("Connection successfull");
 }).catch(() => console.log("No connection"))