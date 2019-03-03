/**
 * todo module.route handler
 * @object {
 *    router: expressRouter,
 *    group: String,
 * }
 */

const express = require('express')
const controller = require('./controller')
const router = express.Router()

const route = {
  group: 'todos',

  router() {
    /* GET index listing. */
    router.get('/', (req, res) => controller.index(req, res))

    return router
  }
}

module.exports = route