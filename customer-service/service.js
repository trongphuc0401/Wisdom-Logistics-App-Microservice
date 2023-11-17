const express = require("express");

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    app.listen(PORT,() =>{
        console.log('\x1b[4m\x1b[36m%s\x1b[0m',`Server running on http://localhost:${PORT}`);
    })
    .on('error',(err)=>{
        console.log(err);
        process.exit();
    })
}

StartServer();