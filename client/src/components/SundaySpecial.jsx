function SundaySpecial() {
  return (
    <section className="section sunday-section">
      <div className="sunday-card">
        <div className="sunday-header">
          <div className="sunday-badge">🍛</div>
          <div>
            <p className="section-subtitle">Sunday Special</p>
            <h2>Every Sunday, Traditional Marwadi Meal</h2>
          </div>
        </div>
        <p className="sunday-description">Enjoy a rich Sunday platter made with special Marwadi recipes and fresh homemade ingredients.</p>
        <div className="sunday-grid">
          <ul>
            <li>Dal Baati Churma</li>
            <li>Gatte Ki Sabzi</li>
            <li>Jeera Rice</li>
            <li>Papad</li>
          </ul>
          <ul>
            <li>Fresh Salad</li>
            <li>Pickle</li>
            <li>Sweet Dish</li>
            <li>Buttermilk</li>
          </ul>
        </div>
        <a href="#order" className="sunday-button">Book Sunday Meal</a>
      </div>
    </section>
  )
}

export default SundaySpecial
