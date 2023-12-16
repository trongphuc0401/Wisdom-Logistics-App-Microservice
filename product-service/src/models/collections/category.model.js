const {model,Schema,default: mongoose} = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        required:[true,"Please provide name category product"]
    },
    description:{
        type:String,
        required:[true,"Please provide description"],
    },
    active:{
        type:Boolean,
        require:[true]

    },
    parent_category:{
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
module.exports = model("category", categorySchema);