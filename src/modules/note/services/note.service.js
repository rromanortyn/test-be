const appPrismaClient = require('../../../data/app-prisma-client')
const NotFoundException = require('../../../shared/exceptions/not-found.exception')

const noteService = {
  async addNote(input) {
    const note = await appPrismaClient.noteEntity.create({
      data: input,
    })

    return note
  },

  async getNotes() {
    const notes = await appPrismaClient.noteEntity.findMany()

    return notes
  },

  async updateNote(id, data) {
    const note = await appPrismaClient.noteEntity.findUnique({
      where: {
        id,
      },
    })

    if (!note) {
      throw new NotFoundException(
        'NoteNotFound',
        'A note with the specified id does not exist',
      )
    }

    const updatedNote = await appPrismaClient.noteEntity.update({
      where: {
        id,
      },
      data,
    })

    return updatedNote
  }
}

module.exports = noteService
