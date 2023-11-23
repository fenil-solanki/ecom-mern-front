const mongooseObj4=require('mongoose');

const ImageSchema=new mongooseObj4.Schema({
    imgName:{
        type:String,
        required:true,
        unique:true
    },
    imgData:{
        type:String,
        required:true
    },
    joindate:{
        type:Date,
        required:true
    }
})

const ImageModel=new mongooseObj4.model('images',ImageSchema);
module.exports=ImageModel;

