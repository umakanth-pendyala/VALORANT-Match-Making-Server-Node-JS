const express = require('express')
const app = express()

require('./app/environment.js')(app)


app.listen(3000, () => {
    console.log("the port is listenining on port 3000")
})