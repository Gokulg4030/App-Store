
//  dataservice is the logic
// create a file for database here that is db.js



const { version } = require('mongoose')
const db=require('./db')



    const register=(username,password,number)=>{
        return db.Userregister.findOne({username})
            .then(user=>{
                if(user){
                    return{
                        status:false,
                        statusCode:404,
                        message:'User Already Register'
                    }
                }else{
                    const newUser=new db.Userlogin({
                        username:username,
                        password:password,
                        number:number

                    })
                    newUser.save();

                    return{
                        status:true,
                        statusCode:200,
                        message:'register Successfull'
                    }
                }
            })

    }

    const login=(username,password)=>{
        return db.Userlogin.findOne({username,password})
        .then(user=>{
            if(user){

                currentUser=user.username

                return{
                    status:true,
                    statusCode:200,
                    message:'Login Successful',
                    currentUser:currentUser
                }
            }else{
                return{
                    status:false,
                    statusCode:400,
                    message:'invalid userdetails'                
                }
            }
        })
    }


    

    const getProducts=()=>{
        return  db.Product.find().then(
         (result)=>{
               if(result)
               {
                   return{ 
                       status:true,
                       statusCode:200,
                       Products:result
                   }
               }
               else{
                   return{
                       status:false,
                       statusCode:404,
                       message:'No products Found'
                   }
               }
           })
       
           }



// get all the products from db.js

const featured=()=>{
 return  db.Product.find({Category:"Socialmedia"}).then(
  (result)=>
    {
        if(result)
        {
            return{ 
                status:true,
                statusCode:200,
                Products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'No products Found'
            }
        }
    })

    }

    // games

    const game =()=>
    {
        return db.Product.find({
         Category:"Games"
        }).then(
            (result)=>{
                if(result)
                {
                    return{
                        status:true,
                        statusCode:200,
                        Products:result
                    }
                }
                else{
                    return{
                        status:false,
                        statusCode:404,
                        message:"No games Found"

                    }
                }
            }
        )

    }

    const music =()=>
    {
        return db.Product.find({
         Category:"Music"
        }).then(
            (result)=>{
                if(result)
                {
                    return{
                        status:true,
                        statusCode:200,
                        Products:result
                    }
                }
                else{
                    return{
                        status:false,
                        statusCode:404,
                        message:"No Music Apps Found"

                    }
                }
            }
        )

    }

    const pay =()=>
    {
        return db.Product.find({
         Category:"Payment"
        }).then(
            (result)=>{
                if(result)
                {
                    return{
                        status:true,
                        statusCode:200,
                        Products:result
                    }
                }
                else{
                    return{
                        status:false,
                        statusCode:404,
                        message:"No Music Apps Found"

                    }
                }
            }
        )

    }


    const addtodownloads = (Id,Title,About,Features,Version,Image,Downloadsize,Requiredos)=>{
        // data added to mongodb  .. create a model in db.js

        return db.Download.findOne({Id}).then(
        (result)=>{
          if(result)
          {
            return{
                status:true,
                statusCode:200,
                message:"Application Already Exists"
            }
          }
          else{
            const newapps = new db.Download({Id,Title,About,Features,Version,Image,Downloadsize,Requiredos})
            newapps.save()    // save to mongodb
            return{
                status:true,
                statusCode:200,
                message:"Application downloaded"
        }}

        })
    }

    const getdownloads=()=>{
        return  db.Download.find().then(
         (result)=>{
               if(result)
               {
                   return{ 
                       status:true,
                       statusCode:200,
                       Products:result
                   }
               }
               else{
                   return{
                       status:false,
                       statusCode:404,
                       message:'Your downloads is empty'
                   }
               }
           })
       
           }


    
           const deletedownload=(Id)=>{
            return db.Download.deleteOne({Id}).then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            wishlist:result,
                            message:"App Deleted"
                        }
                }
                else{
                    return{
                        status:false,
                        statusCode:400,
                        message:"Your Download is empty"
                    }
                }
            }
            )
        }

    
    


   

module.exports={
    getProducts,
    featured,
    game,
    music,
    addtodownloads,
    getdownloads,
    register,
    login,
    deletedownload,
    pay
    
}