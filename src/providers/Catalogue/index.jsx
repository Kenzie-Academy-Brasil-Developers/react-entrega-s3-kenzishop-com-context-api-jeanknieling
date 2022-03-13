import { createContext, useContext } from "react";

const CatalogueContext = createContext();

export const CatalogueProvider = ({ children }) => {
  const catalogue = [
    {
      name: "Huawei P30 - Black",
      price: 3199.0,
      image:
        "https://www.pikpng.com/pngl/b/283-2837346_huawei-p30-black-huawei-p30-clipart.png",
    },
    {
      name: "Galaxy S10",
      price: 3699.0,
      image:
        "https://www.pikpng.com/pngl/b/355-3555675_wholesale-cellphone-accessories-gadget-guard-black-galaxy-s10.png",
    },
    {
      name: "Iphone 8 Plus",
      price: 1699.0,
      image:
        "https://www.pikpng.com/pngl/b/461-4614942_cellphone-transparent-sel-iphone-8-plus-for-boost.png",
    },
    {
      name: "Samsung Galaxy Note 9",
      price: 3999.0,
      image:
        "https://www.pikpng.com/pngl/b/70-709296_samsung-galaxy-note9-samsung-galaxy-note-9-srebrny.png",
    },
    {
      name: "Iphone 7 Plus",
      price: 1699.0,
      image:
        "https://www.pikpng.com/pngl/b/33-336374_phones-iphone-7-plus-front-png-clipart.png",
    },
  ];

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogueContext);
