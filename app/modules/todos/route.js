/**
 * todo module.route handler
 * @object {
 *    router: expressRouter,
 *    group: String,
 * }
 */

const express = require('express');
const router = express.Router();

const route = {
    group: '/todos',

    router() {
        /* GET index listing. */
        router.get('/', (req, res) => res.send('Hello Todos!'))

        return router
    }
}

module.exports = route