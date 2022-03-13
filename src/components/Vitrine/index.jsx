import { VitrineContainer } from "./style";
import ProductCard from "../ProductCard";

import { useCatalogue } from "../../providers/Catalogue";

const Vitrine = () => {
  const { catalogue } = useCatalogue();

  return (
    <VitrineContainer>
      {catalogue.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </VitrineContainer>
  );
};

export default Vitrine;
