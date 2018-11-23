const express = require('express')
const appConfig = require('../config/app')
const routeService = require('./routeService')

const appService = {
    app: express(),
    host: appConfig.host,
    port: appConfig.port,

    /**
     * serve the application
     * @return {[void]}
     */
    serve() {

        // set the middlewares
        routeService.middleware(this.app)

        // set the routes from the route service
        routeService.serve(this.app)

        // set the server
        let server = this.app.listen(appConfig.port, () => {
           console.info(
                `Server Address: ${server.address().address}`,
                `Server Port: ${server.address().port}`
            )
        })
    }
}

module.exports = appService