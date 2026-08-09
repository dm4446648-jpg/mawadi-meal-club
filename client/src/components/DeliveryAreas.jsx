function DeliveryAreas({ areas }) {
  return (
    <section className="section delivery-section">
      <h2>Delivery Areas</h2>
      <ul>
        {areas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </section>
  )
}

export default DeliveryAreas
