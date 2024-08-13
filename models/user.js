import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,'Email is required'],
    },
    username:{
        type:String,
        unique:[true,'Username already exists'],
        match:[/^[a-zA-Z0-9]+$/,'Username must contain only letters and numbers'],
        required:[true,'Username is required'],
    },
    image:{
        type:String,
    },
});

export default models.User || model('User',UserSchema);
