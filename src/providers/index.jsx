import { CatalogueProvider } from "./Catalogue";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};

export default Providers;
