const { Router } = require('express')

const notePaths = require('../consts/note-paths')
const addNoteUseCase = require('../use-cases/add-note.use-case')

const noteRouter = Router()

noteRouter.post(
  notePaths.root,
  async (req, res) => {
    const note = await addNoteUseCase.execute(req.body)

    res
      .status(201)
      .json(note)
  },
)

module.exports = noteRouter
