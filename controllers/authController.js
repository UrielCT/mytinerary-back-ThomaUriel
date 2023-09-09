import User from "../Models/User.js";
import bcrypt from 'bcryptjs'

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            req.body.password = passwordHash
            let body = {...req.body}
            body.password = passwordHash
            
            const newUser = await User.create(body)
            return res.status(201).json({
                success: true,
                userData: newUser,
                message: 'Sign up successfully'
            })
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

export default authController