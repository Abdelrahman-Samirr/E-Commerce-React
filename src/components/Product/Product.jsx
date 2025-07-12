import styles from "./Product.module.css"
import { useContext } from "react";
import { CounterContext } from "../../context/context";
import { Link } from "react-router-dom";

function Product({ product, addToList }) {

  const { increasing, decreasing, addToCart, cartItems } = useContext(CounterContext);

  const selectedProduct = cartItems.find(item => item.id === product.id);
  const quantity = selectedProduct?.quantity || 0;

  const handleAddCart = () => {
    addToCart(product)
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="fas fa-star" style={{ color: "gold" }}></i>);
      } else if (rating >= i - 0.5) {
        stars.push(<i key={i} className="fas fa-star-half-alt" style={{ color: "gold" }}></i>);
      } else {
        stars.push(<i key={i} className="far fa-star" style={{ color: "gold" }}></i>);
      }
    }
    return stars;
  };


  return (
    <>
      <div className={styles.product}>
        <Link to={`/product/${product.id}`} state={{ product }}>
          <figure className={styles.figure}>
            <img className={styles.img} src={product.thumbnail} alt={product.title} />
          </figure>
        </Link>
        <div className={styles.wishIcon} onClick={() => { addToList(product.title) }}><i className="fa-solid fa-heart"></i></div>

        <div className={styles.header__card}>
          <h4>{product.title}</h4>
          <p className={styles.price}>${product.price}</p>
        </div>

        <p>{product.description}</p>

        <div className={styles.middle__part}>
          <div className={styles.stars}>{renderStars(product.rating)}</div>
          <p className={styles.stock}>{product.stock} items in stock</p>
        </div>

        {quantity === 0 ? (<button onClick={handleAddCart}>Add to cart</button>) :
          (<div className={styles.counter__part}>

            <button onClick={() => increasing(product)} disabled={quantity === product.stock}>+</button>
            <p>{quantity}</p>
            <button onClick={() => decreasing(product)}>-</button>
          </div>)}
      </div>
    </>
  );
}

export default Product;