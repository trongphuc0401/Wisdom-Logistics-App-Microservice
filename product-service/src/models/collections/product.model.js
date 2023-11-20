const {model,Schema} = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        router_id:{
            type:Schema.Types.ObjectId,
            required:[true,"Router ID is required"],
            ref:"Router"
        },
        sku:{
            type: String,
            required: [true, "Please provide SKU"],
        },
        ubc_number:{
            type: String,
            required: [true, "Please provide UBC Number"],
        },
        description:{
            type:String,
            required:[true,"Please provide description"],
        },
        price:{
            type:Number,
            required: [true, "Please provide order date"],
        },
        stock_quantity: {
            type: Number,
            required: [true, "Please provide total price"],
            default:0
        },
        category: {
            type: String,
        },
        dimensions:[
            {
                length:{
                    type:Number,
                    required:[true,"Please provide length"],
                    default:0
                },
                width:{
                    type:Number,
                    required:[true,"Please provide length"],
                    default:0
                },
                height:{
                    type:Number,
                    required:[true,"Please provide height"],
                    default:0
                },
            }
        ],
        weight:{
            type:Number,
            required:[true,"Please provide weight"],
            default:0
        },
        tax:{
            type:Number,
            required:[true,"Please provide tax"],
            default:0
        },
        image:{
            type:String,
        },
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
module.exports = model("Products", productSchema);
