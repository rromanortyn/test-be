const { Router } = require('express')

const notePaths = require('../consts/note-paths')
const addNoteUseCase = require('../use-cases/add-note.use-case')
const validateRequest = require('../../../shared/middlewares/validate-request.middleware')
const noteValidators = require('../validators/note.validators')
const getNotesUseCase = require('../use-cases/get-notes.use-case')

const noteRouter = Router()

noteRouter.post(
  notePaths.root,
  validateRequest(noteValidators.addNote),
  async (req, res) => {
    const note = await addNoteUseCase.execute(req.body)

    res
      .status(201)
      .json(note)
  },
)

noteRouter.get(
  notePaths.root,
  async (req, res) => {
    const notes = await getNotesUseCase.execute()

    res
      .status(200)
      .json(notes)
  },
)

module.exports = noteRouter
