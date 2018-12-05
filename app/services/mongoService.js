const mongoose = require('mongoose')
const mongoConfig = require('../config/mongo')

const mongoService = {
    
    db: null,

    setDB(db) {
        this.db = db
    },

    getDB() {
        return this.db
    },

    connect() {
        mongoose.connect(mongoConfig.host)

        this.setDB(mongoose.connection)

        return this
    },

    open( callback ) {
        this.db.once('open', () => {
          // we're connected!
          if (typeof callback === 'function') {
            callback()
          }
        })
    }
}


module.exports = mongoService