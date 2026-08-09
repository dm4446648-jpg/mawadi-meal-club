function Reviews({ reviews }) {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-heading centered">
        <p className="section-subtitle">Happy Customers</p>
        <h2>Loved by Students, Working Professionals & Families</h2>
      </div>
      <div className="reviews-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.name}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">“{item.review}”</p>
            <div className="review-author">
              <span className="review-avatar">{item.name.charAt(0)}</span>
              <div>
                <strong>{item.name}</strong>
                <p>Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
