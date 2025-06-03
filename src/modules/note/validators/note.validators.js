const addNoteJsonSchema = require('../validation-schemas/add-note.json-schema')

const noteValidators = {
  addNote: {
    jsonSchema: addNoteJsonSchema,
  },
}

module.exports = noteValidators