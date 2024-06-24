import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3001

export const corsOptions = {
  origin: [
    '*',
    'http://localhost:3000'
  ]
}