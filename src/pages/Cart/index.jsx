import Header from "../../components/Header";
import ShoppingCart from "../../components/ShoppingCart";
import CartVitrine from "../../components/CartVitrine";
import { CartVitrineContainer } from "./style";
import { useCart } from "../../providers/Cart";

const Cart = () => {
    const { cartProducts}  = useCart();

  return (
    <CartVitrineContainer>
      <Header />
      <main>
        {cartProducts.length === 0 && (
          <p className="no-products">Você não possui produtos no carrinho!</p>
        )}
        <CartVitrine />
        <ShoppingCart />
      </main>
    </CartVitrineContainer>
  );
};

export default Cart;
