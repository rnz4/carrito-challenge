import { IPotion } from "../interfaces/PotionInterface";
import { Button } from "./common/Button";

interface IPotionCard {
  gemas: number;
  imageUrl: string;
  title: string;
  description: string;
  disabled: boolean;
  addProduct: () => void;
}

export const PotionCard = ({
  gemas,
  imageUrl,
  title,
  description,
  disabled,
  addProduct,
}: IPotionCard) => {
  return (
    <div className="flex flex-col items-center w-[200px] h-[250px] bg-[#44403C] rounded-lg hover:border-violet-500 transition-colors p-3 border-2 border-[#44403C] hover:border-[#6C00AA]">
      <div className="w-[80px] h-[22px] bg-[#24B455] rounded-full ml-auto text-center">
        <p className="text-[14px]">
          {gemas > 1 ? gemas + " gemas" : gemas + " gema"}
        </p>
      </div>
      <img className="w-[70px] mb-2" src={imageUrl}></img>
      <div className="mb-4">
        <p className="text-[16px] font-bold">{title}</p>
        <p className="text-[16px] text-[#6C6C55] text-xs">{description}</p>
      </div>
      <Button action={addProduct} disabled={disabled} text={"Agregar"} />
    </div>
  );
};
