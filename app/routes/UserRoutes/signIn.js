const express = require('express')
const User = require('../../db/Schemas/userSchema')
const router = express.Router()
const signInMiddleWare = require('../../middlewares/authenticationMiddleware')
const userDBUtils = require('../../db/DatabaseUtils/userUtils')
const tokenContainer = require('../../middlewares/token')

/**
 * For Generating Token, {email, user Id} are needed.
 */

router.post("/sign_in", signInMiddleWare.validateSignInDataObject ,async (req, res) => {

    const token = tokenContainer.generateToken(req.body.email)
    res.json({
        message: "User Login Successfull",
        status: "201",
        token: token
    })

})

module.exports = router
