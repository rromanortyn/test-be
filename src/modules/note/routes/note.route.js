const { Router } = require('express')

const notePaths = require('../consts/note-paths')
const addNoteUseCase = require('../use-cases/add-note.use-case')
const validateRequest = require('../../../shared/middlewares/validate-request.middleware')
const noteValidators = require('../validators/note.validators')
const getNotesUseCase = require('../use-cases/get-notes.use-case')
const updateNoteUseCase = require('../use-cases/update-note.use-case')
const deleteNoteUseCase = require('../use-cases/delete-note.use-case')

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

noteRouter.put(
  notePaths.$id,
  validateRequest(noteValidators.updateNote),
  async (req, res) => {
    const note = await updateNoteUseCase.execute({
      id: parseInt(req.params.id),
      data: req.body,
    })

    res
      .status(200)
      .json(note)
  },
)

noteRouter.delete(
  notePaths.$id,
  validateRequest(noteValidators.deleteNote),
  async (req, res) => {
    await deleteNoteUseCase.execute({
      id: parseInt(req.params.id),
    })

    res.sendStatus(204)
  },
)

module.exports = noteRouter
