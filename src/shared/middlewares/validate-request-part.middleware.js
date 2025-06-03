const validateRequestPart = async (options) => {
  const {
    req,
    part,
    schema,
  } = options

  const data = req[part]

  schema.parse(data)
}

module.exports = validateRequestPart