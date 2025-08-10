import style from "./Button.module.css";

type buttonProps = {
  text: string;
  btnFunction: () => void;
};
const Button = ({ text, btnFunction }: buttonProps) => {
  return (
    <button className={style.button} onClick={btnFunction}>
      {text}
    </button>
  );
};

export default Button;
