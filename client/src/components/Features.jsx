const features = [
  { title: 'Trusted Quality', description: 'Home-style meals prepared with cleanliness and taste in mind.' },
  { title: 'Daily Delivery', description: 'Timely tiffin service for breakfast and dinner plans.' },
  { title: 'Local Support', description: 'Serving Pratap Nagar, Jaipur and nearby neighborhoods.' },
]

function Features() {
  return (
    <section className="section features-section">
      <h2>Why Choose Us?</h2>
      <div className="cards-grid">
        {features.map((item) => (
          <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
