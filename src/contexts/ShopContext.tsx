import * as React from 'react';
import { IPotion } from "../interfaces/PotionInterface";

interface IShopContext {
  addProduct: Function,
  shopList: IPotion[],
}

type IShopProvider = {
  children?: React.ReactNode
};

const ShopContext = React.createContext<IShopContext>({
  addProduct: (arg0: IPotion) => {},
  shopList: [],
});

const ShopProvider: React.FC<IShopProvider> = ({ children } ) => {
  const [shopList, setShopList] = React.useState<IPotion[]>([])



  const addProduct = (potion: IPotion) => {
    const _shopList = [...shopList]
    _shopList.push(potion)
    setShopList(_shopList)

  }

  console.log(shopList)

  return <ShopContext.Provider value={{ addProduct, shopList }}>{ children}</ShopContext.Provider>
}

function useShop() {
  const { addProduct, shopList,  } = React.useContext(ShopContext)

  return { addProduct, shopList  }
}

export { useShop, ShopProvider }