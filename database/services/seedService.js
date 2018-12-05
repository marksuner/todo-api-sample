/**
 * @todo 
 *  - use db service to register schema and such
 *  - use that db service to seeds
 *  - watch cli param
 *      -file
 *          - filename(s) (seperated by comma)
 *      -all (will call file using (*) )
 *          - all seeder will run
 * 
 */

const seedService = {
    /**
     * register database file migrations module
     * @type {Array}
     */
    files: [

    ],

    /**
     * do seed default to '*' all
     * @param {String} file 
     */
    seed(file = '*') {
        this.files.forEach( (migrate) => {
            
        })
    },
}

module.exports = seedService