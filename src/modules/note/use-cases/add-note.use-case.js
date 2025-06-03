const noteService = require("../services/note.service")

const addNoteUseCase = {
  async execute(input) {
    const note = await noteService.addNote(input)

    return note
  },
}

module.exports = addNoteUseCase
