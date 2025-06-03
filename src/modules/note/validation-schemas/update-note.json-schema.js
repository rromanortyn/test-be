const { z } = require('zod')

const updateNoteJsonSchema = z.object({
  title: z
    .string({ message: 'should be a string' })
    .nonempty({ message: 'should not be empty' }),
  content: z
    .string({ message: 'should be a string' })
    .nonempty({ message: 'should not be empty' }),
})

module.exports = updateNoteJsonSchema