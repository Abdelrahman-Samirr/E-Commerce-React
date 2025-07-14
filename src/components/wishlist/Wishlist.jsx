import React from 'react'
import styles from './Wishlist.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { toggleWishlistState } from '../../store/slice';

function Wishlist() {


    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.counter.wishlist);



    return (
        <div>{wishlist?.length === 0 ? (
            <h2 className={styles.empty}>No items in Wishlist.</h2>
        ) : (
            wishlist?.map((item) => {
                // logic of wishlist
                const isInWishlist = wishlist.some((p) => p.id === item.id);
                const handleWishlist = () => {
                    dispatch(toggleWishlistState(item))
                }
                console.log(item)

                return (
                    <div key={item.id} className={styles.container}>
                        <div className={styles.card}>
                            <figure className={styles.figure}><img className={styles.img} src={item?.thumbnail} alt={item?.title} /></figure>
                            <div className={styles.card__right}>
                                <div className={styles.wishIcon} onClick={handleWishlist}>
                                    {isInWishlist ? (<i className="fa-solid fa-heart"></i>) :
                                        (<i className="fa-regular fa-heart"></i>)
                                    }
                                </div>
                                <h2>{item?.title}</h2>
                                <p className={styles.desc}>{item?.description}</p>
                                <p className={styles.price}>Price: ${item?.price}</p>
                                <p className={styles.rating}>Rating: {item?.rating}</p>
                                <p className={styles.stock}>There are still {item?.stock} items in stock.</p>
                                <p className={styles.warranty}>warranty: {item?.warrantyInformation}</p>
                                <p className={styles.weight}>weight: {item?.weight}</p>

                            </div>
                        </div>
                    </div>
                )
            }
            )
        )}</div>
    )
}

export default Wishlist