const mongooseObj1=require("mongoose")

const CartSchema=new mongooseObj1.Schema({
    email:{
        type:String,
        require:true
    },
    cart:[
        {  _id:{
            type:String,
            require:false
        },
            id:{
                type:String,
                require:true,
            },
            name:{
                type:String,
                require:true,
            },
            company:{
                type:String,
                require:true,
            },
            price:{
                type:String,
                require:true
            },
            image:{
                type:String,
                require:true,
            },
            description:{
                type:String,
                require:true,
            },
            category:{
                type:String,
                require:true
            },
            featured:{
                type:String,
                require:true
            }
        }
    ]
}

)

const Cart=new mongooseObj1.model("Cart",CartSchema)

module.exports=Cart