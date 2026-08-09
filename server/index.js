import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const dbHost = process.env.DB_HOST || '127.0.0.1'
const dbUser = process.env.DB_USER || 'root'
const dbPassword = process.env.DB_PASSWORD || ''
const dbName = process.env.DB_NAME || 'marwadi_meal_club'
const dbPort = Number(process.env.DB_PORT || 3306)

let db = null
let dbReady = false

async function initDatabase() {
  try {
    const rootConnection = await mysql.createConnection({ host: dbHost, user: dbUser, password: dbPassword, port: dbPort })
    await rootConnection.query('CREATE DATABASE IF NOT EXISTS `' + dbName + '`')
    await rootConnection.end()

    db = await mysql.createPool({ host: dbHost, user: dbUser, password: dbPassword, database: dbName, port: dbPort })
    await db.execute(`CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      address TEXT NOT NULL,
      plan VARCHAR(100) NOT NULL,
      createdAt DATETIME NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`)

    const [columns] = await db.execute("SHOW COLUMNS FROM bookings LIKE 'createdAt'")
    if (columns.length === 0) {
      await db.execute("ALTER TABLE bookings ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP")
    }

    dbReady = true
    console.log('Connected to MySQL database and ensured bookings table exists.')
  } catch (error) {
    console.warn('MySQL connection failed. Bookings will be stored in memory only.')
    console.warn(error.message)
  }
}

await initDatabase()

const bookings = []

app.post('/api/bookings', async (req, res) => {
  const { name, phone, address, plan } = req.body
  if (!name || !phone || !address || !plan) {
    return res.status(400).json({ message: 'Please provide all required fields.' })
  }

  const bookingData = {
    name,
    phone,
    address,
    plan,
    createdAt: new Date().toISOString(),
  }

  if (dbReady) {
    try {
      const [result] = await db.execute(
        'INSERT INTO bookings (name, phone, address, plan, createdAt) VALUES (?, ?, ?, ?, ?)',
        [name, phone, address, plan, bookingData.createdAt]
      )
      bookingData.id = result.insertId
      return res.json({ message: 'Booking successful! We will contact you soon.', booking: bookingData })
    } catch (error) {
      console.error('MySQL insert failed:', error)
      return res.status(500).json({ message: 'Booking failed due to server error.' })
    }
  }

  const booking = { id: bookings.length + 1, ...bookingData }
  bookings.push(booking)
  res.json({ message: 'Booking successful! We will contact you soon.', booking })
})

app.get('/api/bookings', async (req, res) => {
  if (dbReady) {
    try {
      const [rows] = await db.execute('SELECT * FROM bookings ORDER BY id DESC')
      return res.json({ bookings: rows })
    } catch (error) {
      console.error('MySQL select failed:', error)
      return res.status(500).json({ message: 'Could not read bookings from database.' })
    }
  }

  return res.json({ bookings })
})

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Internal server error' })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
