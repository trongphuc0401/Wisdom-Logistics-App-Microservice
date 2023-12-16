const {model,Schema, default: mongoose} = require('mongoose');
const addressSchema = new Schema({
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
    state:{
        type:String,
        required:[true,"Please provide strate"],
    },
    city:{
        type:String,
        required:[true,"Please provide city"],
    },
    country:{
        type:String,
        required:[true,"Please provide country"]
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
module.exports = model("address", addressSchema);