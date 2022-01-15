
module.exports = {
    homeRouteController: (app) => {
        app.use('/', require('./homeRoute'))
        app.use('/user', require('./UserRoutes/signUp'))
        app.use('/user', require('./UserRoutes/signIn'))
    }
}