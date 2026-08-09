import HeroImage from './HeroImage'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="badge">🌿 Pure Veg • Fresh Everyday</p>
        <h1>Maa Jaisi Care<br />Har Meal Mein ❤️</h1>
        <p>Fresh homemade pure veg tiffin service in Jaipur. We deliver healthy and delicious meals every day.</p>
        <div className="hero-actions">
          <a href="#order" className="cta-button">Book Now</a>
          <a href="#plans" className="secondary-button">View Plans</a>
        </div>
        <div className="hero-metrics">
          <div>
            <span>500+</span>
            <p>Happy Customers</p>
          </div>
          <div>
            <span>100%</span>
            <p>Pure Veg</p>
          </div>
          <div>
            <span>6+</span>
            <p>Delivery Areas</p>
          </div>
        </div>
        <div className="hero-badges">
          <span>Daily fresh delivery</span>
          <span>Maa jaisi taste</span>
          <span>Easy booking</span>
        </div>
      </div>
      <HeroImage />
    </section>
  )
}

export default Hero


