const { Router } = require('express')

const notePaths = require('../consts/note-paths')
const addNoteUseCase = require('../use-cases/add-note.use-case')
const validateRequest = require('../../../shared/middlewares/validate-request.middleware')
const noteValidators = require('../validators/note.validators')

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

module.exports = noteRouter
