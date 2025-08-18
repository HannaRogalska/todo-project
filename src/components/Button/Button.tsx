type buttonProps = {
  text: string;
  btnFunction: () => void;
};
const Button = ({ text, btnFunction }: buttonProps) => {
  return (
    <button
      className={
        "p-[10px] m-[10px] py-1  rounded-2xl lg:w-[100px]  text-white bg-[var(--input-bg-color)] hover:bg-[var(--input-bg-color-hover)]"
      }
      onClick={btnFunction}
    >
      {text}
    </button>
  );
};

export default Button;
