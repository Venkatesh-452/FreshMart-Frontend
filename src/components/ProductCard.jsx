import './ProductCard.css'

export default function ProductCard({product,setCart}){
  return <article className="product-card">
    <div className="product-image">
      <img src={product.image} alt={product.name} loading="lazy"/>
      <span className="product-tag">Fresh</span>
    </div>
    <div className="product-card-content">
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <div className="product-bottom">
        <strong>₹{product.price}<small>/{product.unit}</small></strong>
        <button onClick={()=>setCart(product)}>Add <span>+</span></button>
      </div>
    </div>
  </article>
}