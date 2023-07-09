import * as React from 'react';
import { IPotion } from "../interfaces/PotionInterface";

interface IShopContext {
  addProduct: Function,
  removeProduct: Function,
  hasEnoughGems: Function,
  categoryAlreadyExist: Function,
  shopList: IPotion[],
  gems: Number
}

type IShopProvider = {
  children?: React.ReactNode
};

const ShopContext = React.createContext<IShopContext>({
  addProduct: (arg0: IPotion) => {},
  removeProduct: (arg0: number) => {},
  hasEnoughGems: (arg0: number) => {},
  categoryAlreadyExist: (arg0: string) => {},
  shopList: [],
  gems: 0
});

const ShopProvider: React.FC<IShopProvider> = ({ children } ) => {
  const [shopList, setShopList] = React.useState<IPotion[]>([])
  const [gems, setGems] = React.useState<number>(3)

  const hasEnoughGems =( price: number)=>{
    return gems >= price 
  }

  const categoryAlreadyExist = (category: string) =>{
    console.log(category)
    return shopList.some((item) => item.categoria == category);
  }

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

  return <ShopContext.Provider value={{ addProduct, removeProduct, hasEnoughGems, categoryAlreadyExist, gems, shopList }}>{ children}</ShopContext.Provider>
}

function useShop() {
  const { addProduct, removeProduct, hasEnoughGems, categoryAlreadyExist, gems, shopList } = React.useContext(ShopContext)

  return { addProduct, removeProduct, hasEnoughGems, categoryAlreadyExist, gems, shopList  }
}

export { useShop, ShopProvider }