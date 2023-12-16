const CustomerService =require('../services/customer-service');
const UserAuth = require('../middleware/auth_jwt')


module.exports = (app) =>{

    const service = new CustomerService();

    app.post('/signup', async (request,response,next) => {

        const { user_name, email, password, full_name,phone_number,role,image, date_of_birth, gender } = request.body;
        
        const { data } = await service.SignUp({ user_name, email, password,full_name, phone_number,role,image, date_of_birth, gender}); 
        
        response.status(200).json({
            success:true,
            user:data,
        });

    });

    app.post('/login', async (request,response,next) => {
       
            const {email,password} = request.body;

            const {data} = await  service.SignIn({email,password})
    
            return response.status(200).json({
                success:true,
                data:data
            })
       
    });

    app.get('/profile',UserAuth,async(request,response,next) => {
        
            const {_id}  = request.user;

            const {data} = await service.getProfile({_id});

            return response.status(200).json({
                success:true,
                data:data
            });
        
    });
    
    app.post('/address',UserAuth,async(request,response,next)=>{
        
        const {_id} = request.user;
        
        const {street,ward,district,city,state,country}  = request.body;

        const {data} = await service.AddNewAddress(_id,{street,ward,district,city,state,country})

        return response.status(200).json({
            success:true,
            data:data
        });
    });
   
}