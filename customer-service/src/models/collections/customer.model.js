const {model,Schema, default: mongoose} = require('mongoose');

const customerSchema = new mongoose.Schema({
    router_id:{
        type:Schema.Types.ObjectId,
        required:[true,"Router ID is required"],
        ref:"Router"
    },
    user_name:{
        type:String,
        required:[true,"Please provide user name"],
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
    },
    password: {
        type: String,
        required:[true,"Please provide password"],
    },
    full_name:[
        {
            first_Name:{
                type:String,
                required:[true,"Please provide first name"],
            },
            last_Name:{
                type:String,
                required:[true,"Please provide last name"],
            },
            
        }
    ],
    phone_number: {
        type:Number,
        required:[true,"Please provide phone number"]
    },
    address:[
        {
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
        }
    ],
    role:[
        {
            name:{
                type:String,
                required:[true,"Please provide name"],
            },
            description:{
                type:String,
                required:[true,"Please provide description"],
            },
            status:{
                type:String,
                enum:["Active","Disabled"],
                required:[true],
            },
        }
    ],
    image:{
        type:String,
    },
    date_of_birth:{
        type: Date,
        require:[true,"Please provide date of birth"]
    },
    gender:{
        type: String,
        enum:["Male","Female"]
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
module.exports = model("Customer", customerSchema);