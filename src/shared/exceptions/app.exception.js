class AppException extends Error {
  constructor(code, message, statusCode) {
    super(message)

    this.code = code
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppException
