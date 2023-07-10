import { useEffect, useState } from "react";
import { PotionCard } from "./PotionCard";
import { IPotion } from "../interfaces/PotionInterface";
import { useShop } from "../contexts/ShopContext";

export const ListadoProductosComponent = () => {
  const [potionsArray, setPotionsArray] = useState([]);
  const { addProduct, shopList, hasEnoughGems, categoryAlreadyExist } =
    useShop();

  const fetchPotions = async () => {
    const potionsResponse = await fetch("http://localhost:3001/productos");
    const potions = await potionsResponse.json();
    setPotionsArray(potions);
  };

  useEffect(() => {
    fetchPotions();
  }, []);

  console.log(shopList);
  return (
    <div className="flex flex-row gap-8 flex-wrap w-auto pl-8">
      {potionsArray.map((potion: IPotion) => (
        <PotionCard
          key={potion.id}
          gemas={potion.precio}
          imageUrl={potion.imagen}
          title={potion.nombre}
          description={potion.descripcion}
          addProduct={() => {
            addProduct(potion);
          }}
          disabled={
            !hasEnoughGems(potion.precio) ||
            categoryAlreadyExist(potion.categoria)
          }
        />
      ))}
    </div>
  );
};
