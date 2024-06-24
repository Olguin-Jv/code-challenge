import cors from 'cors'
import app from './app'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000

app.use(cors({
  origin: '*'
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})