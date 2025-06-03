const validateRequestPart = require('./validate-request-part.middleware')

const validateRequest = (validationsCollection) => async (req, res, next) => {
  const {
    jsonSchema,
    paramSchema,
  } = validationsCollection
    
  if (jsonSchema) {
    await validateRequestPart(
      {
        req,
        part: 'body',
        schema: jsonSchema,
      },
    )
  }

  if (paramSchema) {
    await validateRequestPart(
      {
        req,
        part: 'params',
        schema: paramSchema,
      },
    )
  }

  await next()
}

module.exports = validateRequest