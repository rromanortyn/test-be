const { z } = require('zod')

const idSchema = z
  .number({
    coerce: true,
    message: 'should be a number',
  })
  .int({ message: 'should be an integer' })

module.exports = idSchema
