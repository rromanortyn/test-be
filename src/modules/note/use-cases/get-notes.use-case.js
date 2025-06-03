const noteService = require('../services/note.service')

const getNotesUseCase = {
  async execute() {
    const notes = await noteService.getNotes()

    return notes
  },
}

module.exports = getNotesUseCase
