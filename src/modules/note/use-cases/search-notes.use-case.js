const noteService = require('../services/note.service')

const searchNotesUseCase = {
  async execute(input) {
    const notes = await noteService.searchNotes(input.q)

    return notes
  },
}

module.exports = searchNotesUseCase
