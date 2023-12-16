const {model,Schema,default:mongoose} = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customer_id: {
            type:Schema.Types.ObjectId,
            required:[true,"Customer ID is required"],
            ref:"Customer"
        },
        // router_id:{
        //     type:Schema.Types.ObjectId,
        //     required:[true,"Router ID is required"],
        //     ref:"Router"
        // },
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
        status_order:{
            type:String,
            enum:["Draft","Confirmed","Closed"],
        },
        discount: {
            type: Number,
            required: [true, "Please provide total price"],
            default:0
        },
        total_price: {
            type: Number,
            required: [true, "Please provide total price"],
            default:0
        },
        shipping_charges:{
            type:Number,
            default:0
        },
        notes:{
            type:String,
        },
        terms:{
            type:String
        },
        attach_file:{
            type:String
        }
    },
    {
        toJSON: {
            transform(doc, ret){
                delete ret.__v;
            }
        },
        timestamps:true,
    }
    );
module.exports = model("Order", orderSchema);
