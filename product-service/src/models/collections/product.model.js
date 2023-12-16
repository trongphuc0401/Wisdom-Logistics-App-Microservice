const {model,Schema,default: mongoose} = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        sku:{
            type: String,
            required: [true, "Please provide SKU"],
        },
        product_name:{
            type:String,
            required: [true, "Please provide name product"],
        },
        upc_number:{
            type: String,
            required: [true, "Please provide UBC Number"],
        },
        description:{
            type:String,
            required:[true,"Please provide description"],
        },
        category:[
            { type: Schema.Types.ObjectId, ref: 'category', require: true }
        ]
        ,
        unit:{
            type:String,
            required: [true, "Please provide  unit"],
            enum:["box","cm","dz","ft","g","in","kg","ib","mg","ml","m","psc"]

        },
        price:{
            type:Number,
            required: [true, "Please provide price of product"],
        },
        stock_quantity: {
            type: Number,
            required: [true, "Please provide quantity"],
            default:0
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
module.exports = model("products", productSchema);
