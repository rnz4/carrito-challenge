interface Header {
  toggle: ()=> void;
}

export const HeaderComponent = ({toggle}:Header) => {
  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span>xxx Gemas</span>
      </div>
      <button className="text-white hover:underline" onClick={toggle}>Ver Carrito (xxx)</button>
    </div>
  );
};
