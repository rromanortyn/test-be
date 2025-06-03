const addNoteJsonSchema = require('../validation-schemas/add-note.json-schema')
const updateNoteJsonSchema = require('../validation-schemas/update-note.json-schema')
const updateNoteParamSchema = require('../validation-schemas/update-note.param-schema')

const noteValidators = {
  addNote: {
    jsonSchema: addNoteJsonSchema,
  },
  updateNote: {
    paramSchema: updateNoteParamSchema,
    jsonSchema: updateNoteJsonSchema,
  },
}

module.exports = noteValidators