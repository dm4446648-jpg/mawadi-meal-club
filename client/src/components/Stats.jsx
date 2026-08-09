function Stats() {
  const items = [
    { label: 'Happy Customers', value: '500+' },
    { label: 'Pure Veg', value: '100%' },
    { label: 'Delivery Areas', value: '6+' },
  ]

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {items.map((item) => (
          <div className="stat-card" key={item.label}>
            <p className="stat-value">{item.value}</p>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
