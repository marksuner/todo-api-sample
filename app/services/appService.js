const express = require('express')
const appConfig = require('../config/app')
const routeService = require('./routeService')
const mongoService = require('./mongoService')

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
    routeService.beforeMiddleware(this.app)

    // set the routes from the route service
    routeService.serve(this.app)

    // set the middlewares
    routeService.afterMiddleware(this.app)

    // set mongo db
    mongoService
      .connect()
      .open(() => {
        console.log('mongodb opened')
      })

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