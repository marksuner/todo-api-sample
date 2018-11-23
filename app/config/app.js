const env = require('../utils/env')

module.exports = {
    host: env('APP_HOST', 'http://localhost'),
    port: env('APP_PORT', 8080)
}