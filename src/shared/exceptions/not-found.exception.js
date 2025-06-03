const AppException = require('./app.exception')

class NotFoundException extends AppException {
  constructor(code, message) {
    super(code, message, 404)
  }
}

module.exports = NotFoundException
