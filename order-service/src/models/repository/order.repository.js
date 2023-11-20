const{OrderModel} = require("../collections");
const {
    APIError,
    BadRequestError,
    STATUS_CODES,}=require("../../../../common/utils/app-error")

class OrderRepository {

    async Orders(customer_id){

        const orders = await OrderModel.find({customer_id });       
        return orders;
    }
    async createNewOrder(customer_id,product_id){
       try{
            const order = new OrderModel({
                customer_id,
                product_id,
            });
       }catch(err) {
        throw new APIError(
            "APIError",
            STATUS_CODES.INTERNAL_SERVER_ERROR,
            "Error is occur"
        );
       }
    }
}



