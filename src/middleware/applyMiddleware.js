const express = require('express');
const cors = require("cors");

let cookieParser = require('cookie-parser');
const { Local_client, Client } = require('../config/default');
const applyMiddleware = (app)=>{

    app.use(cors({
        origin:[
          Local_client, Client
      ],
        credentials:true
      }));
    
app.use(cookieParser());
app.use(express.json())

}
module.exports=applyMiddleware