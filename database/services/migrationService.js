/**
 * @todo 
 *  - create db service that will get all schema and register
 *    mongoose models.
 *  - create db schema model as well for monitoring schema's run (up and down).
 */

const migrationService = {
    /**
     * register database file migrations module
     * @type {Array}
     */
    files: [

    ],

    /**
     * do migration up (asc)
     * @return void
     */
    up() {
        this.files.forEach( (migrate) => {

        })
    },

    /**
     * do migration down (desc)
     * @return void
     */
    down() {
        this.files.forEach( (migrate) => {
            
        })
    }
}

module.exports = migrationService