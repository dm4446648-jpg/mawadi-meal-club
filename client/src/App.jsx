import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import MenuPreview from './components/MenuPreview'
import Plans from './components/Plans'
import SundaySpecial from './components/SundaySpecial'
import DeliveryAreas from './components/DeliveryAreas'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

const plans = [
  { id: 'one-time', title: 'One Time Meal', price: '₹2400', description: 'Delicious one-time tiffin with fresh home-style food.' },
  { id: 'two-time', title: 'Two Time Meal', price: '₹4000', description: 'Morning and evening meals with balanced nutrition.' },
]

const deliveryAreas = ['Jagatpura', 'Sitapura', 'Mansarovar', 'Durgapura', 'Gopalpura']
const reviews = [
  { name: 'Ritu Mam', review: 'Food tastes like Maa ka haath. Delivery on time and very polite service.' },
  { name: 'Amit Bhaiya', review: 'Excellent meal plans and affordable prices. Highly recommended.' },
]

function App() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', plan: 'one-time' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '' })
  const apiUrl = import.meta.env.VITE_API_URL || 'mysql://root:gDVElynkHKNycGyzjhYWPYpnTAuVUtIv@mysql.railway.internal:3306/railway.railway.app/api/bookings'

  useEffect(() => {
    document.title = 'Marwadi Meal Club'
  }, [])

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, success: '', error: '' })
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.message || 'Server error')
      }
      const data = await response.json()
      setStatus({ loading: false, success: data.message || 'Booking successful!', error: '' })
      setForm({ name: '', phone: '', address: '', plan: 'one-time' })
    } catch (error) {
      setStatus({ loading: false, success: '', error: error.message || 'Booking failed' })
    }
  }

  return (
    <div className="page-shell">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MenuPreview />
      <Plans plans={plans} />
      <SundaySpecial />
      <DeliveryAreas areas={deliveryAreas} />
      <Reviews reviews={reviews} />
      <Faq />
      <Contact form={form} onChange={handleChange} onSubmit={handleSubmit} status={status} />
      <Footer />
      <a className="whatsapp-button" href="https://wa.me/918955329256" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        💬
      </a>
      <a className="call-button" href="tel:+918955329256" aria-label="Call us">
        📞
      </a>
    </div>
  )
}

export default App
