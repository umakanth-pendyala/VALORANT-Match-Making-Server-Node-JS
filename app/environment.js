const bodyParser = require('body-parser')
const session = require('express-session')
const routeCabinetController = require('./routes/index')
const dbController = require('./db/Connector')

module.exports = async app => {
    app.use( bodyParser.json());
    const connectionSuccessfull = await dbController.establishConnectionToDatabase()
    if (connectionSuccessfull) console.log("Database connection successfull")
    else console.log("Database connection failed")

    // ROUTES MANAGE SECTION
    routeCabinetController.homeRouteController(app)
}