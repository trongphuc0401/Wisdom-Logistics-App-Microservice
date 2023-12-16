const{OrderModel} = require("../collections/order.model");
const {v4, uuid_v4} = require("uuid")
class OrderRepository {

    async findOrders(customer_id){

        const existingOrders = await OrderModel.find({customer_id });       
        return existingOrders;
    }

    async findOrderById({id}){
        const existingOrders = await OrderModel.finById(id).populate()
        return existingOrders;
    }

    async createNewOrder(customer_id,product_id){
            const orderId = uuid_v4();
        try{
            const order = new OrderModel({
                orderId,
                customer_id,
                // router_id,
                product_id,
                order_date,
                delivery_date,
                status_order,
                discount,
                total_price,
                shipping_charges,
                notes,
                terms,
                attach_file
            });
            const orderResult = await order.save();
            return orderResult;
        }catch(err) {
            console.error("Error creating order:", err.message);
            throw err;
        }
           
    }

    
}
module.exports = OrderRepository;



