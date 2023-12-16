const express = require('express');
const {PORT}  =require('./config')
const {databaseConnection} = require('./database')
const expressApp = require('./express-app');


const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app)
    
    app.use('/',(req,res,next)=>{
        return res.status(200).json({
            "msg":"This site is customer"
        })
    })
    app.listen(PORT,() =>{
        console.log('\x1b[4m\x1b[36m%s\x1b[0m',`Server running on http://localhost:${PORT}`);
    })
    .on('error',(err)=>{
        console.log(err);
        process.exit();
    })
}

StartServer();



