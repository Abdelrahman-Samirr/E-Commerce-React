import axios from 'axios'
import styles from "./Productlist.module.css";
import React, { useEffect, useState } from 'react'
import { axiosInterceptor } from '../../interceptor'
import Product from '../Product/Product'
import ProductDetail from '../poductdetail/ProductDetail';


function Productlist({setLoading}) {

    const [data, setData] = useState(null)

    useEffect(() => {

        setLoading(true)

        axiosInterceptor.get("/products")
        .then((res) => {
            setData(res.data.products);
            console.log(res.data.products)
        })

        .catch((err) => {
            console.error(err);
        })

        .finally(() => {
            setLoading(false);
        })
    }, [])

    const handleList = (title) =>{

        alert(`${title} added to short list`)
    }
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.cards}>
                {data?.length > 0 ? data.map((product) => (
                    <Product key={product.id} product={product} addToList={handleList}></Product>
                )) : ""
                }
                </div>
            </div>
        </div>
    )
}

export default Productlist