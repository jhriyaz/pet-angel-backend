const express = require('express');
const connectDb = require('./db/ConnecttoDB');
const port = process.env.PORT ||6999
const categories =require('./routes/Category');
const jwtToken =require('./routes/auth');
const users =require('./routes/auth/users');
const AdminCheck =require('./routes/auth/adminCheck');
const pets =require('./routes/pets');
const adoption =require('./routes/adoption');
const applyMiddleware = require('./middleware/applyMiddleware');
const app = express();

// middle ware
applyMiddleware(app)


// Category Routes
app.use(categories)
// Jwt Token
app.use(jwtToken)

// user related routes
app.use(users)

// Admin related routes

app.use(AdminCheck)

//pet related routes
app.use(pets)

//adoption related routes
app.use(adoption)

// Check server Health
app.get('/health', (req, res) => {
    res.send('Welcome to Backend of Pet Angel')
    })
    
//Handle Random Request
app.all('*', (req, res,next) => {
const error=new Error(`The Requested url-( ${req.url} ) is invalid`)
error.status = 404
next(error)

})

// Handle Error Message

app.use((err,req,res,next)=>{

    res.status(err.status||500).json({message:err.message})
   
})



// Db Connection Check
 const main=async()=>{
    await connectDb()
    app.listen(port, (req,res)=>{
        console.log('Server is running on port: ',port)
    })
 }
 main()