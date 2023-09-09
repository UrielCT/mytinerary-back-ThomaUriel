import User from "../Models/User.js"

export const emailExists = async (req, res, next) => {

    const userExists = await User.findOne({ email: req.body.email}) 
    if(!userExists){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: 'Email already in use'
    })
}