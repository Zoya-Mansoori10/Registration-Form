//use mongoose

const mongoose=require('mongoose')

//connection mongodb

const url='mongodb://localhost:27017/registration'

mongoose.connect(url,
    // {useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    console.log("Connection Successfull!")
}).catch((err)=>{
    console.log("Unsuccessfull Connection!")
})

//creat  Schema

let loginSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String 
})

//make model
let Login = new mongoose.model("Login",loginSchema)




//export

module.expert= Login;