import React from 'react'
import styles from "./Cart.module.css"
import { useContext } from 'react';
import { CounterContext } from '../../context/context';
import { Link } from 'react-router-dom';

function Cart() {

  const { increasing, decreasing, cartItems } = useContext(CounterContext);

  return (
    <>
      <div className={styles.container}>
        <h2>Cart</h2>
        {console.log(cartItems)}

        {cartItems?.length === 0 ? (
          <h2 className={styles.empty}>No items in Cart.</h2>
        ) : (
          cartItems?.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.card__left}>
                <Link className={styles.link__img} to={`/product/${item.id}`} state={{ product: item }}>
                  <figure className={styles.figure}><img className={styles.img} src={item.thumbnail} alt={item.title} /></figure>
                </Link>
                <h3>{item.title}</h3>
              </div>

              <div className={styles.card__right}>
                <div className={styles.counter__part}>
                  <button onClick={() => increasing(item)} disabled={item.quantity === item.stock}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => decreasing(item)}>-</button>
                </div>
                <p className={styles.price}>Price: ${item.price * item.quantity}</p>
              </div>

            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Cart