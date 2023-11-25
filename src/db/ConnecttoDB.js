const mongoose = require('mongoose')
require('dotenv').config()


let getUriString=()=>{
    let databaseUri
    databaseUri=process.env.URI
    databaseUri=databaseUri.replace('<username>',process.env.DB_USERNAME)
    databaseUri=databaseUri.replace('<password>',process.env.DB_PASSWORD)
   return databaseUri
}


const connectDb=async()=>{
    uri=getUriString()
    console.log('database is connecting')
    await mongoose.connect(uri,{dbName:process.env.DB_NAME})
    console.log('database Connection Successful')

}

module.exports =connectDb