import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "../interfaces/ProductInterface";
import { useShop } from "../contexts/ShopContext";

export const ListadoProductosComponent = () => {
  const [productsArray, setProductsArray] = useState([]);
  const { addProduct, shopList, hasEnoughGems, categoryAlreadyExist } =
    useShop();

  const fetchProducts = async () => {
    const productsResponse = await fetch("http://localhost:3001/productos");
    const products = await productsResponse.json();
    setProductsArray(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-row gap-8 flex-wrap w-auto pl-8">
      {productsArray.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          gemas={product.precio}
          imageUrl={product.imagen}
          title={product.nombre}
          description={product.descripcion}
          addProduct={() => {
            addProduct(product);
          }}
          disabled={
            !hasEnoughGems(product.precio) ||
            categoryAlreadyExist(product.categoria)
          }
        />
      ))}
    </div>
  );
};
