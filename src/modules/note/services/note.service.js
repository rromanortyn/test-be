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
    const notes = await appPrismaClient.noteEntity.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    })

    return notes
  },

  async getNoteById(id) {
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

    return note
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
  },

  async deleteNote(id) {
    await this.getNoteById(id)

    await appPrismaClient.noteEntity.delete({
      where: {
        id,
      },
    })
  },

  async searchNotes(q) {
    const notes = await appPrismaClient.noteEntity.findMany({
      where: {
        title: {
          contains: q.toLowerCase(),
          mode: 'insensitive',
        },
      },
    })

    return notes
  }
}

module.exports = noteService
