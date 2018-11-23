const dotenv = require('dotenv');

/**
 * load dot env configuration
 * @object {[result]}
 */
const result = dotenv.config()

if (result.error) {
  throw result.error
}