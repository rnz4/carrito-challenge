import * as React from 'react';
import { IPotion } from "../interfaces/PotionInterface";

interface IShopContext {
  addProduct: Function,
  removeProduct: Function,
  shopList: IPotion[],
}

type IShopProvider = {
  children?: React.ReactNode
};

const ShopContext = React.createContext<IShopContext>({
  addProduct: (arg0: IPotion) => {},
  removeProduct: (arg0: number) => {},
  shopList: [],
});

const ShopProvider: React.FC<IShopProvider> = ({ children } ) => {
  const [shopList, setShopList] = React.useState<IPotion[]>([])



  const addProduct = (potion: IPotion) => {
    const _shopList = [...shopList]
    _shopList.push(potion)
    setShopList(_shopList)

  }

  const removeProduct = ( potion: IPotion ) => {
    const shopListFiltered = shopList.filter(item => item.id !== potion.id);
    setShopList(shopListFiltered)
  }

  console.log(shopList)

  return <ShopContext.Provider value={{ addProduct, removeProduct, shopList }}>{ children}</ShopContext.Provider>
}

function useShop() {
  const { addProduct, removeProduct, shopList } = React.useContext(ShopContext)

  return { addProduct, removeProduct, shopList  }
}

export { useShop, ShopProvider }