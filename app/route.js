/**
 * index.route handler
 * @object {
 *    router: expressRouter,
 *    group: String,
 * }
 */

const express = require('express')
const router = express.Router()
const route = {
  group: '/',

  router: () => {
    /* GET index listing. */
    router.get('/', (req, res) =>
      res.send({
        success: true,
        data: [],
        message: 'Successfully get /'
      })
    )

    return router
  }
}

module.exports = route