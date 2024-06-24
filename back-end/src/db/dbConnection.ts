import mongoose from 'mongoose'
import { MONGODB_URI } from '../constants/constants'

const dbConnect = async (): Promise<void> => {
	try {
		await mongoose.connect(MONGODB_URI)
		console.log('🍂 Connected to MongoDB')
	} catch (error) {
		console.error('Error connecting to MongoDB:', error)
		process.exit(1)
	}
}

const initDbConnection =	async (): Promise<void> => {
	dbConnect()
		.then(() => {
			console.log(`🍂 DB connected`)
		})
		.catch((error) => {
			console.error('Error connecting to DB:', error)
			process.exit(1)
		})
}

export default initDbConnection