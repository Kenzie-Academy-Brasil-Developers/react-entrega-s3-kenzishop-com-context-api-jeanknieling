import { Container } from "./style";

import{useCart} from "../../providers/Cart";

const CartCounter = () => {
  const { cartProducts } = useCart();
  return (
    <Container>
      <p>{cartProducts.length}</p>
    </Container>
  );
};

export default CartCounter;
