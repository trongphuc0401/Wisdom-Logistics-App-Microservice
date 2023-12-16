
const {OrderRepository} = require("../models")
const {FormateDate} = require("../utils")
class OrderService {
    
    constructor(){
        this.repository = new OrderRepository();
    }

    async PlaceOrder(userInput){

        const { customerId, productId,order_date,delivery_date,status_order,discount,total_price,shipping_charges,notes,terms,attach_file } = userInput

        const orderResult = await this.repository.CreateNewOrder(customerId, productId,order_date,delivery_date,status_order,discount,total_price,shipping_charges,notes,terms,attach_file);
        
        return FormateDate(orderResult);
    }

    async GetOrders(customerId){
        
        const orders = await this.repository.Orders(customerId);
        return FormateDate(orders)
    }

    async GetOrderDetails({ _id,orderId }){
        const orders = await this.repository.Orders(productId);
        return FormateDate(orders)
    }
}
module.exports = OrderService;