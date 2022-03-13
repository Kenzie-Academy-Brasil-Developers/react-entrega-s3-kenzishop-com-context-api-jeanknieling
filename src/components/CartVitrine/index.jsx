import { CartVitrineContainer } from "./style";
import CartProductCard from "../CartProductCard";

import { useCart } from "../../providers/Cart";

const CartVitrine = () => {
  const { cartProducts } = useCart();

  return (
    <CartVitrineContainer>
      {cartProducts.map((product, index) => (
        <CartProductCard key={index} product={product} />
      ))}
    </CartVitrineContainer>
  );
};

export default CartVitrine;
