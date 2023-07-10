import * as React from "react";
import { IProduct } from "../interfaces/ProductInterface";

const DEFAULT_GEMS = 3;

interface IShopContext {
  addProduct: Function;
  removeProduct: Function;
  hasEnoughGems: Function;
  categoryAlreadyExist: Function;
  clearShopList: Function;
  shopList: IProduct[];
  gems: Number;
}

type IShopProvider = {
  children?: React.ReactNode;
};

const ShopContext = React.createContext<IShopContext>({
  addProduct: (arg0: IProduct) => {},
  removeProduct: (arg0: number) => {},
  hasEnoughGems: (arg0: number) => {},
  categoryAlreadyExist: (arg0: string) => {},
  clearShopList: () => {},
  shopList: [],
  gems: 0,
});

const ShopProvider: React.FC<IShopProvider> = ({ children }) => {
  const [shopList, setShopList] = React.useState<IProduct[]>([]);
  const [gems, setGems] = React.useState<number>(DEFAULT_GEMS);

  const hasEnoughGems = (price: number) => {
    return gems >= price;
  };

  const categoryAlreadyExist = (category: string) => {
    return shopList.some((item) => item.categoria == category);
  };

  const addProduct = (potion: IProduct) => {
    const _shopList = [...shopList];
    _shopList.push(potion);
    setShopList(_shopList);

    setGems(gems - potion.precio);
  };

  const removeProduct = (potion: IProduct) => {
    const shopListFiltered = shopList.filter((item) => item.id !== potion.id);
    setShopList(shopListFiltered);

    setGems(gems + potion.precio);
  };

  const clearShopList = () => {
    setShopList([]);
  };

  return (
    <ShopContext.Provider
      value={{
        addProduct,
        removeProduct,
        hasEnoughGems,
        categoryAlreadyExist,
        clearShopList,
        gems,
        shopList,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

function useShop() {
  const {
    addProduct,
    removeProduct,
    hasEnoughGems,
    categoryAlreadyExist,
    clearShopList,
    gems,
    shopList,
  } = React.useContext(ShopContext);
  return {
    addProduct,
    removeProduct,
    hasEnoughGems,
    categoryAlreadyExist,
    clearShopList,
    gems,
    shopList,
  };
}

export { useShop, ShopProvider };
