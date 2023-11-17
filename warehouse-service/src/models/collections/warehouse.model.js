const { model,Schema } = require("mongoose"); // Erase if already required
const warehouseSchema  =new Schema({
    name:{
        type:String,
        required: [true, "Please provide warehouse name"],
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
    capacity: {
        type: Number,
        required: [true, "Please provide capacity"],
        default:0
    },
    location:[
        {
           postal_code:{
                type:String,
                required:[true,"Please provide postal code"],
           },
           street:{
            type:String,
            required:[true,"Please provide street"],
           },
           ward:{
            type:String,
            required:[true,"Please provide ward"],
           },
           district:{
            type:String,
            required:[true,"Please provide district"],
           },
           city:{
            type:String,
            required:[true,"Please provide city"],
           },
           country:{
            type:String,
            required:[true,"Please provide country"]
           }
        }
    ]
},
  {
    timestamps: true,
  });
  module.exports =  model("warehouse", warehouseSchema);