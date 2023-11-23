const mongooseObj3=require("mongoose")

const ProductSchema=new mongooseObj3.Schema({
   
    id:{
        type:String,
        unique:true,
        require:true
        
    },
    name:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:false
    },
    category:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    style:{
        type:String,
        require:false
    },
    color:{
        type:Array,
        require:true
    },
    image:{
        type:Array,
        require:true
    },
    description:{
        type:String,
        require:false
    },
    actual_price:{
        type:Number,
        require:true
    },
    discount_price:{
        type:Number,
        require:false
    },
    discount_rate:{
        type:Number,
        require:false
    },
    sizes:{
        type:Array,
        require:true
    },
    new:{
        type:Boolean,
        require:false
    },
    short_description:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    reviews:{
        type:Number,
        require:false
    },
    stars:{
        type:Number,
        require:false
    }

}

)

const Product=new mongooseObj3.model("Product",ProductSchema)

module.exports=Product