const{OrderModel} = require("../collections");
const {
    APIError,
    BadRequestError,
    STATUS_CODES,}  =require("../../utils/app-error")

class OrderRepository {
    async createOrder(){
       try{
            const order = new OrderModel({
                
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