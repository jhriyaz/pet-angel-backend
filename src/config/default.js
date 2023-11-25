require('dotenv').config()
let config={
    Local_client:process.env.LOCAL_CLIENT_URL,
    Client:process.env.CLIENT_URL
}
module.exports=config