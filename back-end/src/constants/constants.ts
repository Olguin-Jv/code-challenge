import dotenv from 'dotenv'
dotenv.config()

export const PORT: string = process.env.PORT || '3001'
export const MONGODB_URI: string = process.env.MONGODB_URI || ''

export const corsOptions = {
  origin: [
    '*',
    'http://localhost:3000'
  ]
}