import cors from 'cors'
import app from './app'
import { corsOptions, PORT } from './constants/constants'
import initDbConnection from './db/dbConnection'

app.use(cors(corsOptions))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

initDbConnection()