interface Product {
  gemas: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const Product = ({ gemas, imageUrl, title, description }: Product) => {
  return (
    <div className="flex flex-col items-center w-[200px] h-[250px] bg-[#44403C] rounded-lg hover:border-violet-500 transition-colors p-3">
        <div className="w-[80px] h-[22px] bg-[#24B455] rounded-full ml-auto text-center">
          <p className="text-[14px]">{gemas > 1 ? gemas + " gemas" : gemas + " gema"}</p>
        </div>
        <img className="w-[70px] mb-2" src={imageUrl}></img>
        <div className="mb-4">
          <p className="text-[16px] font-bold">{title}</p>
          <p className="text-[16px] text-[#6C6C55] text-xs">{description}</p>
        </div>
        <button className="w-[90%] h-[28px] bg-[#6C00AA] rounded-full text-white text-center font-medium">Agregar</button>
      </div>
  );
};
