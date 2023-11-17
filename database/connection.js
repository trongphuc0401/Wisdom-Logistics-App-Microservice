const mongoose = require('mongoose');
const {DB_URL} = require("../");

module.exports = async() => {
    try {

        await mongoose.connect(DB_URL);
        console.log('\x1b[4m\x1b[32m%s\x1b[0m',`MongoDB connected success`);

    }catch(error) {
        console.log('\x1b[31m%s\x1b[0m','==========Error ========')
        console.log(error);
        process.exit(1);

    }
};
