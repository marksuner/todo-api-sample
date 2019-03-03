const routeService = {
  /**
   * register routes module
   * @type {Array}
   */
  routes: {

    'api': [
      require('../modules/todos/route'),
      require('../modules/users/route'),
    ],

    'web': [

      // should always be the last route to set
      require('../route')
    ]
  },
  /**
   * set before Middleware
   * @param  {[type]} app [description]
   * @return {[type]}     [description]
   */
  beforeMiddleware(app) {
    app.use((req, res, next) => {
      res.header('Content-Type', 'application/json')
      next()
    })
  },

  /**
   * set after middleware
   * @param {Express} app
   */
  afterMiddleware(app) {
    // 404 not found
    app.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  },

  /**
   * serve api routes
   * @param {[Express]} app
   */
  _serveApi(app) {
    const routes = this.routes.api;

    // loop each router
    routes.forEach(({
      group,
      router,
    }) => {
      app.use(`/api/${group}`, router())
    })

  },

  /**
   * serve web routes
   * @param {[Express]} app
   */
  _serveWeb(app) {
    const routes = this.routes.web;

    routes.forEach(({
      group,
      router,
    }) => {
      app.use(`${group}`, router())
    })
  },

  /**
   * serve all module routes
   * @param  {[Express]} app
   * @return {[void]}
   */
  serve(app) {
    this._serveApi(app);
    this._serveWeb(app);
  }
}

module.exports = routeService