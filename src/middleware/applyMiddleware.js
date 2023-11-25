const express = require('express');
const cors = require("cors");

let cookieParser = require('cookie-parser');
const { Local_client, Client } = require('../config/default');
const applyMiddleware = (app)=>{

    app.use(cors({
        origin:[
            'http://localhost:5173',
      ],
        credentials:true
      }));
    
app.use(cookieParser());
app.use(express.json())

}
module.exports=applyMiddleware