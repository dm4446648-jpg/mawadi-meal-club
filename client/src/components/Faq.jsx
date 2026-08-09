const faqs = [
  { q: 'How do I place an order?', a: 'Use the booking form or WhatsApp us directly for quick assistance.' },
  { q: 'Do you deliver every day?', a: 'Yes, we deliver fresh meals daily across Pratap Nagar and nearby areas.' },
  { q: 'Can I change my meal plan?', a: 'Yes, just call or WhatsApp us and we will update your plan.' },
]

function Faq() {
  return (
    <section className="section faq-section">
      <div className="section-heading centered">
        <p className="section-subtitle">FAQs</p>
        <h2>Quick answers for easy ordering</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((item) => (
          <article className="faq-card" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Faq
