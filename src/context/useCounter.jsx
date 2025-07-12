import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([])


  const addToCart = (product) => {
    const selectedBoolean = cartItems.find((item) => item.id === product.id)

    if (!selectedBoolean) {

      setCartItems((selectedArr) => [...selectedArr, { ...product, quantity: 1 }])

      setCount(p => p + 1)
    }
  }

  const increasing = (product) => {

    setCount(p => p + 1)

    setCartItems((selectedArr) => 
      selectedArr.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  };

  const decreasing = (product) => {

    setCartItems((selectedArr) => 
      selectedArr.map((item) => 
        item.id === product.id ? {...item, quantity: item.quantity -1} : item
      ).filter((item) => item.quantity > 0 )
    )

    setCount((p) => (p > 0 ? p - 1 : 0));
  };

  return { count, increasing, decreasing, cartItems ,addToCart };
}
