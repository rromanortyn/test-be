const { PrismaClient } = require('@prisma/client')

const appPrismaClient = new PrismaClient({
  log : ['query', 'info', 'warn', 'error'],
})

module.exports = appPrismaClient