import User from "../Models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            //req.body.password = passwordHash
            let body = {...req.body}
            body.password = passwordHash
            
            const newUser = await User.create(body)

            const token = jwt.sign({ name: newUser.name, lastName: newUser.lastName }, process.env.SECRET_KEY, {expiresIn:'1h'})

            return res.status(201).json({
                success: true,
                userData: newUser,
                token: token,
                message: 'Sign up successfully'
            })
            
        } catch (error) {
            //console.log(error)
            next(error)
        }
    },

    signIn: async (req, res, next) => {
        try {
            let { email:emailBody, password } = req.body
            const user = await User.findOne({ email:emailBody })

            if (!user) {
                throw new Error("No user exists with this email address")
            }

            const passwordValidated = bcrypt.compareSync( password, user.password )

            if (!passwordValidated) {
                throw new Error("The email or password is incorrect")
            }

            let { email, imageURL, name, lastName, country} = user
            
            const token = jwt.sign({ email, imageURL }, process.env.SECRET_KEY, {expiresIn:'1h'})

            return res.status(200).json({
                success: true,
                userData: { name, lastName, country, imageURL },
                token: token,
                message: 'Sign in successfully'
            })
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    loginWithToken: (req, res) => {
        console.log(req);
        const {email, imageURL, name} = req.user
        res.status(200).json({
             success: true,
             userData: {email, imageURL, name},
             message: 'sign in successfully'
        })
    }
}

export default authController