const {OrderRepository} = require("../models/repository")
const {FormateDate} = require("../utils")
class OrderService {
    
    constructor(){
        this.repository = new OrderRepository();
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