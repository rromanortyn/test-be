const { z } = require('zod')

const idSchema = require('../../../shared/validation-schemas/id.schema')

const updateNoteParamSchema = z.object({
  id: idSchema,
})

module.exports = updateNoteParamSchema
