const menuItems = [
  { title: 'Dal Baati Churma', description: 'Authentic marwadi dal, crispy baati and sweet churma.' },
  { title: 'Gatte Ki Sabzi', description: 'Soft gatte in rich curry with balanced spices.' },
  { title: 'Jeera Rice & Salad', description: 'Light jeera rice paired with fresh crunchy salad.' },
  { title: 'Sweet & Buttermilk', description: 'Seasonal sweet treat with cooling buttermilk.' },
]

function MenuPreview() {
  return (
    <section className="section menu-section" id="menu">
      <div className="section-heading centered">
        <p className="section-subtitle">Menu Preview</p>
        <h2>What you get in our daily tiffin</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MenuPreview
