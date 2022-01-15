const User = require('../Schemas/userSchema')

module.exports = {
    checkIfUserExists: async (conditions) => {
        try {
            return await User.exists(conditions)
        } catch(err) {
            return false
        }
    },
    saveUser: async function (userDetails) {
        try {
            if (!await this.checkIfUserExists({email: userDetails.email})) {
                const user = new User(userDetails)
                const result = await user.save()
                return true
            }
            else return false
        } catch(err) {
            return false
        }
    }
}