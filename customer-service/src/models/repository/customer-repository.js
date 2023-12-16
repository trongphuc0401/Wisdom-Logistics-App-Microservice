const { APIError } = require("../../utils/app-error");
const{CustomerModel,AddressModel} = require("../collections");
class CustomerRepository  {
    async CreateCustomer({ user_name, email, password,full_name, phone_number,role, image, date_of_birth, gender, salt}){
        try{
            const customer = new CustomerModel({
                // router_id,
                user_name,
                email,
                password,
                full_name: {
                    first_name: full_name.first_name,
                    last_name: full_name.last_name
                },
                phone_number,
                address:[],
                role:{
                    role_name:role.role_name,
                    description:role.description,
                    status:role.status
                },
                image,
                date_of_birth,
                gender,
                salt

            })
    
            const customerResult = await customer.save();
            return customerResult;
        }catch(error) {
            console.error("Error creating customer:", error.message);
            throw error;
        }
      
    }

    async CreateAddress({ _id, street,ward, district,state,city,country}){
            try{

                const customer = await CustomerModel.findById(_id);

                if(customer) {

                    const newAddress  = new AddressModel({
                        street,
                        ward, 
                        district,
                        state, 
                        city,
                        country
                    })

                    await newAddress.save();

                    customer.address.push(newAddress);

                    return await customer.save();
         
            } else {
                console.error("Customer not found with _id:", _id);
            }

            }catch(err) {
                console.error("Error creating customer:", err.message);
                throw err;
            }
           
    }

    async FindCustomer({ email }){

        const existingCustomer = await CustomerModel.findOne({ email: email });

        return existingCustomer;
    }
    
    async FindCustomerById({ id }){

        const existingCustomer = await CustomerModel.findById(id).populate('address');

        return existingCustomer;
    }
    
}
module.exports = CustomerRepository;