
// import express 
const express = require('express');



// connecting frontend and backend = angular and node     (for this install cors)
 const cors=require('cors')

 const dataservice=require('./services/dataservice')    // linking dataservice and index

 const app = express();     // creating an application using express

 // to parse json request using app.use from dataservice.js  (parse is used to convert json file)

 app.use(express.json());


app.listen(3000,()=>{                           // port
    console.log('listening on port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'       //(connecting frontend and backend)              // path of frontend  (integration)
}))


// connecting with mongodb     (install mongoose)


// api to get all products

app.get('/all-products',(req,res)=>{
    dataservice.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


// featured

app.get('/featured',(req,res)=>{
    dataservice.featured()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/game',(req,res)=>{
    dataservice.game()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/music',(req,res)=>{
    dataservice.music()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to post downloads

app.post('/addtodownloads',(req,res)=>{
    dataservice.addtodownloads(req.body.Id,req.body.Title,req.body.About,req.body.Features,req.body.Version,req.body.Image,req.body.Downloadsize,req.body.Requiredos)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// api to get downloads

app.get('/getdownloads',(req,res)=>{
    dataservice.getdownloads()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/register',(req,res)=>{
    dataservice.register(req.body.username,req.body.password,req.body.number)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    dataservice.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/delete/:id',(req,res)=>{
    dataservice.deletedownload(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result) 
    })
})

app.get('/pay',(req,res)=>{
    dataservice.pay()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})