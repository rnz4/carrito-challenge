interface IButton {
  text: String,
  action: ()=> void,
  disabled?: boolean
}

export const Button = ({text, action, disabled}:IButton) => {
  return (
    <button className="rounded-full bg-[#6C00AA] w-full h-[28px] text-white text-center font-medium  hover:scale-105 disabled:hover:scale-100 disabled:bg-[#81858a] " onClick={action} disabled={disabled}>
      {text}
    </button>
  );
};
