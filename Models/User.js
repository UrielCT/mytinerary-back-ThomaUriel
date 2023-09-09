import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    imageURL: {type: String, default:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'},
    country: {type: String}
},
{
    timestamps: true
}
)

const User = model('user',userSchema)

export default User