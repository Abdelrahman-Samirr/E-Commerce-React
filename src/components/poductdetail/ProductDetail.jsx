import styles from "./ProductDetail.module.css"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../../context/context";
import { useLocation } from "react-router-dom"

function ProductDetail() {

    const location = useLocation();
    const product = location.state?.product;

    const { increasing, decreasing, addToCart, cartItems } = useContext(CounterContext);

    const selectedProduct = cartItems.find(item => item.id === product.id);
    const quantity = selectedProduct?.quantity || 0;

    const handleAddCart = () => {
        addToCart(product)
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <figure className={styles.figure}><img className={styles.img} src={product?.thumbnail} alt={product?.title} /></figure>
            <div className={styles.card__right}>
                <h2>{product?.title}</h2>
                <p className={styles.desc}>{product?.description}</p>
                <p className={styles.price}>Price: ${product?.price}</p>
                <p className={styles.rating}>Rating: {product?.rating}</p>
                <p className={styles.stock}>There are still {product?.stock} items in stock.</p>
                <p className={styles.warranty}>warranty: {product?.warrantyInformation}</p>
                <p className={styles.weight}>weight: {product?.weight}</p>

                {quantity === 0 ? (<button onClick={handleAddCart}>Add to cart</button>) :
                    (<div className={styles.counter__part}>

                        <button onClick={() => increasing(product)} disabled={quantity === product.stock}>+</button>
                        <p>{quantity}</p>
                        <button onClick={() => decreasing(product)}>-</button>
                    </div>)}
            </div>
            </div>
        </div>
    );
}

export default ProductDetail