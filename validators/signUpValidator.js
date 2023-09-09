import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
    min: 6,
    max: 15,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 5
}

const emailMessages = {
    "string.empty": "You must put an email",
    "any.required": "It can't be blank",
    "string.email": "the email address must contains @ and .com " 
}

export const signUpSchema = joi.object({
    name: joi.string().required().min(3).max(15),
    lastName: joi.string().required().min(3).max(15),
    email: joi.string().email().required().messages(emailMessages),
    password: joiPwd(complexityOptions),
    imageURL: joi.string().uri(),
    country: joi.string()
})