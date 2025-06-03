const express = require('express')
const dotenv = require('dotenv')

const appPaths = require('./shared/consts/app-paths')
const noteRoute = require('./modules/note/routes/note.route')

dotenv.config()

const app = express()

app.use(express.json())

app.use(
  appPaths.notes,
  noteRoute,
)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`)
})
