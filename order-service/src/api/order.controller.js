const OrderService = require("../services/order-service");
const UserAuth = require('../middleware/auth_jwt')
module.exports = (app) =>{

    const service  = new OrderService();

    app.post('/new',UserAuth, async(req,res,next)=> {
      
        const { _id } = req.user;
        
        const{customerId, productId,order_date,delivery_date,status_order,discount,total_price,shipping_charges,notes,terms,attach_file} = req.body;
        
        const{data} = await service.PlaceOrder({_id,customerId, productId,order_date,delivery_date,status_order,discount,total_price,shipping_charges,notes,terms,attach_file})
   
        res.status(200).json({
            success:true,
            user:data,
        });
    })

    app.get('/orders',UserAuth, async(req,res,next) =>{
        const {_id} = req.user; 
        const {data} = await service.GetOrders(_id);
        res.status(200).json({
            success:true,
            user:data,
        });
    })
}