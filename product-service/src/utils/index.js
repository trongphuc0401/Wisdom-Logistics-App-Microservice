const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const{APP_SECRET} = require("../config")

module.exports.FormateData = (data) => {
    if (data) {
      return { data };
    } else {
      throw new Error("Data Not found!");
    }
  };


  module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt(10);
  };

  module.exports.GeneratePassword = async (password, salt) => {
    if (password === undefined || password === null) {
      throw new Error('Password cannot be undefined or null');
    }
    return await bcrypt.hash(password, salt);
  };

  module.exports.ValidatePassword = async (enteredPassword, savedPassword,salt) =>{
    return (await this.GeneratePassword(enteredPassword, salt)) === savedPassword;
 };
  
  module.exports.GenerateSignature = async (payload) => {
    try {
      return await jwt.sign(payload, APP_SECRET, { expiresIn: "30d" });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  module.exports.ValidateSignature = async (req) => {
    try{
      const signature = req.get("Authorization");
      console.log(signature);
      const payload = await jwt.verify(signature.split(" ")[1],APP_SECRET);
      req.user = payload;
      return true;
    }catch(error) {
      console.log(error);
      return false;
    }
  };



 