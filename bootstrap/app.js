// bootstrap of applications
require('./bootstrap')

// application service
const appService = require('../app/services/appService')

appService.serve()
