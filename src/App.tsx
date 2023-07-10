import { useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";

function App() {
  const [shoppingCart, setShoppingCart] = useState(false);

  const showShoppingCart = () => {
    setShoppingCart(true);
  };

  const hideShoppingCart = () => {
    setShoppingCart(false);
  };

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent showCart={showShoppingCart} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {shoppingCart ? (
            <CarritoComponent hideCart={hideShoppingCart} />
          ) : (
            <ListadoProductosComponent />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
