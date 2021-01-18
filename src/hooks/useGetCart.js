import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useGetCart = () => {
  const cart = useSelector((state) => {
    return state.firestore.data.cart;
  });
  const [currentCart, setCurrentCart] = useState([]);
  const userId = useSelector((state) => state.firebase.auth.uid);

  useEffect(() => {
    if (cart) {
      for (let [key, value] of Object.entries(cart)) {
        if (key === userId) {
          setCurrentCart(value.cart);
        }
      }
    }
  }, [currentCart, cart, userId]);

  return currentCart;
};

export default useGetCart;
