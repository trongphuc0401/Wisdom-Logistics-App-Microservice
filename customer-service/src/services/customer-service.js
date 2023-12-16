const{CustomerRepository} = require("../models")

const {FormateData,GenerateSalt,GeneratePassword,ValidatePassword,GenerateSignature,ValidateSignature} = require("../utils/index")
const { APIError } = require('../utils/app-error');
class CustomerService {

    constructor(){
        this.repository = new CustomerRepository();
    }

    async SignIn(userInputs) {
        
        const {email,password}  =userInputs;

        const existingCustomer  = await this.repository.FindCustomer({email});

        if(existingCustomer) {

            const validPassword = await ValidatePassword(password, existingCustomer.password,existingCustomer.salt);
            if(validPassword) {
                const token = await GenerateSignature({email:existingCustomer.email,_id: existingCustomer._id});
                return FormateData({id:existingCustomer._id},token);
            }
        }
        return FormateData(null);
    }

    async SignUp(userInputs){
        
        const {user_name,email,password,full_name,phone_number,role,date_of_birth,image,gender } = userInputs;

        
        let salt = await GenerateSalt();
        
        let userPassword = await GeneratePassword(password, salt);
        
        const existingCustomer = await this.repository.CreateCustomer({ user_name,email, password: userPassword, full_name,phone_number,role,date_of_birth,image,gender, salt});
        
        const token = await GenerateSignature({ email: email, _id: existingCustomer._id});
        
        return FormateData({id: existingCustomer._id,token});

    }
    
    async AddNewAddress(_id,userInputs) {
        const {street,ward,district,state,city,country} = userInputs;

        const addressResult = await this.repository.CreateAddress({_id,street,ward,district,state,city,country})
        
        return FormateData(addressResult)
    }

    async getProfile(id) {
        try{
            const existingCustomer = await this.repository.FindCustomerById({id});
            return FormateData(existingCustomer);
        }catch(err) {
            throw new APIError('Data not found', err)
        }
    }
    
}
module.exports = CustomerService;