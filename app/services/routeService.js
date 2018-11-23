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
     * set middleware
     * @param  {[type]} app [description]
     * @return {[type]}     [description]
     */
    middleware(app) {
        app.use((req, res, next) => {
            res.header('Content-Type', 'application/json');
            next();
        });
    },

    /**
     * serve all module routes
     * @param  {[Express]} app
     * @return {[void]}
     */
    serve(app) {
        this.routes.forEach( ({group, router, middleware}) => {
            app.use(group, router());
        })
    },
}

module.exports = routeService