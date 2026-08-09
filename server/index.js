import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const bookings = []

app.post('/api/bookings', (req, res) => {
  const { name, phone, address, plan } = req.body
  if (!name || !phone || !address || !plan) {
    return res.status(400).json({ message: 'Please provide all required fields.' })
  }

  const booking = { id: bookings.length + 1, name, phone, address, plan, createdAt: new Date().toISOString() }
  bookings.push(booking)

  res.json({ message: 'Booking successful! We will contact you soon.', booking })
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
