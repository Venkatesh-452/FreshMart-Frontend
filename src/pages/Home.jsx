import {useNavigate} from 'react-router-dom'
import products from '../data/product'
import ProductCard from '../components/ProductCard'
import './Home.css'

export default function Home({setCart}){
  const navigate=useNavigate()
  return <main className="home-page">
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">🌿 FARM FRESH • HEALTHY • DELIVERED</span>
        <h1>Fresh Vegetables,<br/><span>Delivered to Your Door.</span></h1>
        <p>Handpicked fresh vegetables from trusted farms, delivered with quality and care at affordable prices.</p>
        <div className="hero-actions">
          <button onClick={()=>navigate('/products')}>Shop Fresh Vegetables <span>→</span></button>
          <button className="hero-secondary" onClick={()=>navigate('/products')}>Explore Products</button>
        </div>
        <div className="hero-trust">
          <div><strong>100%</strong><span>Fresh Produce</span></div>
          <div><strong>Fast</strong><span>Home Delivery</span></div>
          <div><strong>Best</strong><span>Quality & Price</span></div>
        </div>
      </div>
    </section>

    <section className="features">
      <div className="feature-card"><div className="feature-icon">🥬</div><h3>Farm Fresh Products</h3><p>Quality vegetables selected carefully for you every day.</p></div>
      <div className="feature-card"><div className="feature-icon">🚚</div><h3>Fast Delivery</h3><p>Fresh groceries delivered quickly to your doorstep.</p></div>
      <div className="feature-card"><div className="feature-icon">💰</div><h3>Best Prices</h3><p>Fresh vegetables at prices that fit your budget.</p></div>
    </section>

    <section className="featured-section">
      <div className="section-heading">
        <div><span>POPULAR CHOICES</span><h2>Fresh Picks for You</h2><p>Choose from our handpicked fresh vegetables.</p></div>
        <button onClick={()=>navigate('/products')}>View All Products →</button>
      </div>
      <section className="products-grid">{products.map(p=><ProductCard key={p.id} product={p} setCart={setCart}/>)}</section>
    </section>
  </main>
}