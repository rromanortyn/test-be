const express = require('express')
const dotenv = require('dotenv')
const { z } = require('zod')

const appPaths = require('./shared/consts/app-paths')
const noteRoute = require('./modules/note/routes/note.route')

dotenv.config()

const app = express()

app.use(express.json())

app.use(
  appPaths.notes,
  noteRoute,
)

app.use((error, req, res, next) => {
  console.log(error)
  switch (true) {
    case error instanceof z.ZodError:
      const firstError = error.errors[0]
      const pathString = firstError.path.join('.')

      res
        .status(400)
        .json(
          {
            code: 'ValidationError',
            message: `"${pathString}" ${firstError.message}`,
          },
        )

    // case error instanceof AppException:
      // const {
      //   code,
      //   message,
      //   status,
      // } = error
    
      // const responseBody = {
      //   code,
      //   message,
      // }
    
      // return c.json(responseBody, status as ContentfulStatusCode)    
    
    default:
      res
        .status(500)
        .json(
        {
          code: 'InternalServerError',
          message: 'Internal server error',
        },
      )
  }
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`)
})
