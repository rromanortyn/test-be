const noteService = require('../services/note.service')

const updateNoteUseCase = {
  async execute(input) {
    const {
      id,
    } = input

    const notes = await noteService.deleteNote(id)

    return notes
  },
}

module.exports = updateNoteUseCase
