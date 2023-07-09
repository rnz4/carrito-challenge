import { useEffect, useState } from "react";
import { Product } from "./Product";

interface Potion {
  id: number;
  precio: number;
  imagen: string;
  nombre: string;
  descripcion: string;
}

export const ListadoProductosComponent = () => {
  const [potionsArray, setPotionsArray] = useState([]);

  const fetchPotions = async () => {
    const potionsResponse = await fetch("http://localhost:3001/productos")
    const potions = await potionsResponse.json()
    console.log(potions)
    setPotionsArray(potions)
  }

  useEffect(() => {
    fetchPotions()
  }, [])

  return (
    <div className="flex flex-row gap-8 flex-wrap w-auto pl-8">
      {potionsArray.map((potion: Potion) => (
        <Product key={potion.id} gemas={potion.precio} imageUrl={potion.imagen} title={potion.nombre} description={potion.descripcion}  />
      ))}

    </div>
  );
};
