const noteService = require('../services/note.service')

const updateNoteUseCase = {
  async execute(input) {
    const {
      id,
      data,
    } = input

    const notes = await noteService.updateNote(id, data)

    return notes
  },
}

module.exports = updateNoteUseCase
