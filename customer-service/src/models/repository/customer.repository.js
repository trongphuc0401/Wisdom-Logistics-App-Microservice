const{CustomerModel} = require("../collections");
const {
    APIError,
    BadRequestError,
    STATUS_CODES,}  =require("../../../../common/utils")

class CustomerRepository  {
    async CreateCustomer({ email, password, phone, salt }){

        const customer = new CustomerModel({
            email,
            password,
            salt,
            phone,
            address: []
        })

        const customerResult = await customer.save();
        return customerResult;
    }
}