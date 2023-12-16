const {model,Schema, default: mongoose} = require('mongoose');

const customerSchema = new mongoose.Schema({

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
            first_name:{
                type:String,
                required:[true,"Please provide first name"],
            },
            last_name:{
                type:String,
                required:[true,"Please provide last name"],
            },
            
        }
    ],
    phone_number: {
        type:Number,
    },
    address:[
        { type: Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    role:[
        {
            role_name:{
                type:String,
            },
            description:{
                type:String,
            
            },
            status:{
                type:String,
                enum:["Active","Disabled"],
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
    },
    salt:{
        type:String
    }
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps:true,
}
);
module.exports = model("customer", customerSchema);