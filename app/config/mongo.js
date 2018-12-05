const env = require('../utils/env')

module.exports = {
    host: env('MONGO_HOST', 'mongodb://localhost/test'),
}