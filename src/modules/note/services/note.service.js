const appPrismaClient = require('../../../data/app-prisma-client')

const noteService = {
  async addNote(input) {
    const note = await appPrismaClient.noteEntity.create({
      data: input,
    })

    return note
  },
}

module.exports = noteService
