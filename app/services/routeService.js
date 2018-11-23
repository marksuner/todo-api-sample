const routeService = {
    /**
     * register routes module
     * @type {Array}
     */
    routes: [
        require('../modules/todos/route'),
        require('../modules/users/route'),

        // should always be the last route to set
        require('../route'),
    ],

    /**
     * serve all module routes
     * @param  {[Express]} app
     * @return {[void]}
     */
    serve(app) {
        this.routes.forEach( ({group, router}) => {
            app.use(group, router());
        })
    },
}

module.exports = routeService