function Contact({ form, onChange, onSubmit, status }) {
  return (
    <section className="section contact-section" id="order">
      <div className="contact-copy contact-panel">
        <p className="section-subtitle">Book Your Tiffin</p>
        <h2>Fresh homemade food delivered to your door</h2>
        <p>Start your plan with a simple order form or message us on WhatsApp for quick help.</p>
        <div className="contact-small-grid">
          <div>
            <strong>Phone</strong>
            <p><a href="tel:+918955329256">+91 89553 29256</a></p>
          </div>
          <div>
            <strong>Working Hours</strong>
            <p>8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>

      <form className="order-form order-card" onSubmit={onSubmit}>
        <label>
          Your Name
          <input value={form.name} onChange={onChange('name')} required placeholder="Enter your full name" />
        </label>
        <label>
          Phone Number
          <input value={form.phone} onChange={onChange('phone')} required placeholder="Enter your phone number" />
        </label>
        <label>
          Delivery Address
          <textarea value={form.address} onChange={onChange('address')} required placeholder="Enter your full delivery address" rows="4" />
        </label>
        <label>
          Select Your Plan
          <select value={form.plan} onChange={onChange('plan')}>
            <option value="one-time">One Time Meal</option>
            <option value="two-time">Two Time Meal</option>
          </select>
        </label>
        <button type="submit" className="submit-button" disabled={status.loading}>
          {status.loading ? 'Booking...' : 'Book Your Tiffin 🚀'}
        </button>
        {status.success && <p className="message success">{status.success}</p>}
        {status.error && <p className="message error">{status.error}</p>}
      </form>
    </section>
  )
}

export default Contact
