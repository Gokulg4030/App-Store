
const mongoose = require('mongoose');       // importing mongoose

mongoose.connect('mongodb://localhost:27017/Apps',()=>        // path from mongodb
{
    console.log('Connecting to mongodb')                 
})

// model creation

const Product = mongoose.model('product',
{
    Id:Number,
    Title:String,
    About:String,
    Features:String,
    Version:String,
    Image:String,
    Apppermissions:String,
    Downloadsize:String,
    Releasedon:String,
    Requiredos:String,
    Category:String

})

const Download = mongoose.model('download',
{
    Id:Number,
    Title:String,
    About:String,
    Features:String,
    Version:String,
    Image:String,
    Downloadsize:String,
    Requiredos:String
})

const Userlogin = mongoose.model('user',{
    username:String,
    password:String
})

const Userregister = mongoose.model('register',{
    username:String,
    password:String,
    number:Number
})



// export

module.exports={
    Product,
    Download,
    Userlogin,
    Userregister
}