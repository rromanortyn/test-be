const validateRequestPart = async (options) => {
  const {
    req,
    part,
    schema,
  } = options

  const data = req[part]
console.log(options)
  schema.parse(data)
}

module.exports = validateRequestPart