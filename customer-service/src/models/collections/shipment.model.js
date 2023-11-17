const {model,Schema} = require("mongoose");

const shipmentSchema = new Schema({
    customer_id: {
        type:Schema.Types.ObjectId,
        required:[true,"Customer ID is required"],
        ref:"Customer"
    },
    driver_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Driver ID is required"],
        ref:"Driver"
    },
    product_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Product ID is required"],
        ref:"Product"
    },
    order_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Product ID is required"],
        ref:"Product"
    },
    router_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Router ID is required"],
        ref:"Router"
    },
    warehouse_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Warehouse ID is required"],
        ref:"Warehouse"
    },
    ship_date: {
        type: Date,
        required: [true, "Please provide ship date"],
    },
    arrival_date: {
        type: Date,
    },
    status:{
        type:String,
        enum:["Order placed","Preparing to ship","In transit","Delivered"],
        default:"Preparing to ship",
    },
    tracking:{
        // what is a tracking
        type:Number,
        required:[true,"Please provide "],
        default:0
    },
    carrier:{
        type:Number,
        required:[true,"Please provide quantity"],
        default:120
    },
   
},
{
    timestamps:true,
}
);
module.exports =  model("Shipment", shipmentSchema);