const mongooseObj2=require("mongoose")

const UserSchema=new mongooseObj2.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }    
}

)

const User=new mongooseObj2.model("User",UserSchema)

module.exports=User