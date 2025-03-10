import app from './app'
import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.PORT)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})