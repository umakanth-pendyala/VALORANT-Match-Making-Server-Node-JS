const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (email, expirationTimeInSeconds = '5000s') => {
        const payLoad = {email: email}
        const TOKEN_SECRET="09f26e402586e2faa8da4c98a35f1b20d6b033c60"
        return jwt.sign(payLoad, TOKEN_SECRET, {expiresIn: expirationTimeInSeconds})
    }
}