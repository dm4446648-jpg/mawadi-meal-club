import Logo from '../logo.png'

function Navbar() {
  return (
    <nav className="top-nav">
      <div className="brand-block">
        <div className="logo-block">
          <img src={Logo} alt="Marwadi Meal Club logo" />
        </div>
        <div>
          <p className="brand-title">Marwadi Meal Club</p>
          <p className="brand-subtitle">Maa Jaisi Care, Har Meal Mein</p>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#plans">Plans</a>
        <a href="#reviews">Reviews</a>
        <a href="#order">Book</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#order" className="nav-button">Order Now</a>
    </nav>
  )
}

export default Navbar
