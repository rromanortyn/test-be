const noteService = require('../services/note.service')

const autocompleteNotesUseCase = {
  async execute(input) {
    const notes = await noteService.autocompleteNotes(input.q)

    return notes
  },
}

module.exports = autocompleteNotesUseCase
