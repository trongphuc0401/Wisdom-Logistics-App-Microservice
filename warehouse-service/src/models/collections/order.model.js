const {model,Schema} = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customer_id: {
            type:Schema.Types.ObjectId,
            required:[true,"Customer ID is required"],
            ref:"Customer"
        },
        router_id:{
            type:Schema.Types.ObjectId,
            required:[true,"Router ID is required"],
            ref:"Router"
        },
        product_id:{
            type:Schema.Types.ObjectId,
            required:[true,"Product ID is required"],
            ref:" Product"
        },
        order_date:{
            type: Date,
            required: [true, "Please provide order date"],
        },
        delivery_date:{
            type: Date,
            required: [true, "Please provide order date"],
        },
        status:{
            type:String,
            enum:["Draft","Confirmed","Closed"],
            default:"Confirmed",
        },
        total_price: {
            type: Number,
            required: [true, "Please provide total price"],
            default:0
        },
        payment_status: {
            type:String,
            enum:["Unpaid","Pending","Authorized","Canceled","Expired","Paid","Failed"],
            default:"Pending",
        },
        quantity:{
            type:Number,
            required:[true,"Please provide quantity"],
            default:120
        }
    },
    {
        timestamps:true,
    }
    );
module.exports = model("Order", orderSchema);
