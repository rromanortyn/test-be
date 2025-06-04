**To use this application**  you need to have Docker installed on your device.

**To start the server** use `docker compose up --build`.

The application will start on the port specified in the environment variables.

**Environment variables location**
Environment variables used in this application should be stored in a file called `.env` in the root of the project.

**Environment variables keys and values**
`PORT` = '3000'

`POSTGRES_HOST`
`POSTGRES_PORT`
`POSTGRES_PASSWORD`
`POSTGRES_USER`
`POSTGRES_DB`

`POSTGRES_DATABASE_URL` = 'postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public'

`FRONTEND_URL` = 'http://localhost:3001'
