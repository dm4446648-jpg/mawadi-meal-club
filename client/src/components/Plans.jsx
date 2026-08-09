function Plans({ plans }) {
  return (
    <section className="section plans-section" id="plans">
      <div className="section-heading">
        <p className="section-subtitle">Choose Your Meal Plan</p>
        <h2>Healthy • Affordable • Homemade</h2>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <article className={`plan-card plan-card-${plan.id}`} key={plan.id}>
            <div className="plan-card-top">
              <h3>{plan.title}</h3>
              <span className="plan-badge">{plan.id === 'two-time' ? 'Most Popular' : 'Best Value'}</span>
            </div>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-note">{plan.id === 'one-time' ? '₹80 Per Tiffin' : 'Lunch + Dinner'}</p>
            <ul className="plan-list">
              <li>4 Fresh Rotis</li>
              <li>{plan.id === 'two-time' ? 'Lunch Included' : '1 Bowl Dal'}</li>
              <li>{plan.id === 'two-time' ? 'Dinner Included' : '1 Bowl Seasonal Sabzi'}</li>
              <li>Rice</li>
              <li>Fresh Salad</li>
            </ul>
            <a href="#order" className="plan-button">Choose Plan</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Plans


