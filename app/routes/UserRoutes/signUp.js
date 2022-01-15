const express = require('express')
const User = require('../../db/Schemas/userSchema')
const router = express.Router()
const signInMiddleWare = require('../../middlewares/authenticationMiddleware')
const userDBUtils = require('../../db/DatabaseUtils/userUtils')
const tokenContainer = require('../../middlewares/token')

router.post("/sign_up", signInMiddleWare.validateSignUpDataObject ,async (req, res) => {

    const result = await userDBUtils.saveUser(req.body)
    const token = tokenContainer.generateToken(req.body.email)
    if (result === true) {
        res.json({
            message: "User Details Stored successfully",
            status: "201",
            token: token
        })
    } else {
        res.json({
            message: "User sign up failed!",
            status: "401",
            token: null
        })
    }

})

module.exports = router
