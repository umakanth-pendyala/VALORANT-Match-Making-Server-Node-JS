const validator = require('../validation/authenticationValidationContainer')
const userDBUtils = require('../db/DatabaseUtils/userUtils')

module.exports = {
    validateSignUpDataObject: (req, res, next) => {
        if (validator.validateSignUpObject(req.body)) {
            next()
            return
        }
        res.json({
            error: "Sign up validation failed!"
        })
        res.end()
    },
    validateSignInDataObject: async (req, res, next) => {
        if (validator.validateSignInObject(req.body) && await userDBUtils.checkIfUserExists(req.body)) {
            next()
            return
        }
        res.json({
            error: "Sign in validation failed!"
        })
        res.end()
    }
}