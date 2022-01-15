const mongoose = require('mongoose')

module.exports = {
    establishConnectionToDatabase: async () => {
        try {
            const conditions = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
           await mongoose.connect("mongodb://localhost:27017/VALORANT_TOURNAMENTs", conditions)
           return true
        }
        catch(error) {
            console.log(error)
            return false
        }
    }
}