import { useState } from "react";
import { useShop } from "../contexts/ShopContext";
import { IProduct } from "../interfaces/ProductInterface";
import { Button } from "./common/Button";

interface IShoppingCart {
  hideCart: () => void;
}

export const CarritoComponent = ({ hideCart }: IShoppingCart) => {
  const { removeProduct, shopList, clearShopList } = useShop();
  const [showCart, setShowCart] = useState(true);
  const [disableBuyBtn, setDisableBuyBtn] = useState(false);

  const buyCart = async () => {
    const ShopListID = shopList.map((item) => item.id);

    const response = await fetch("http://localhost:3001/compras/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ShopListID),
    });

    if (response.status == 201) {
      clearShopList();
      setShowCart(false);
      setDisableBuyBtn(true);
    }
  };

  const onBackHandler = () => {
    hideCart();
    setDisableBuyBtn(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-[100px]">
        <Button action={onBackHandler} text={"Volver"} />
      </div>

      <div className="mt-6 mb-6">
        {showCart ? (
          shopList.map((potion: IProduct) => (
            <div
              key={potion.id}
              className="flex items-center justify-between h-[50px] bg-[#44403C] border-b-2 border-[#757563] px-4"
            >
              <img
                src={potion.imagen}
                className="rounded-full w-10 h-10 bg-[#6C6C55]"
              />
              <p className="text-[16px] font-bold">{potion.nombre}</p>
              <button
                className="text-[#6C6C55] font-bold"
                onClick={() => removeProduct(potion)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p>Compra Realizada!</p>
        )}
      </div>
      <Button action={buyCart} text={"Comprar"} disabled={disableBuyBtn} />
    </div>
  );
};
