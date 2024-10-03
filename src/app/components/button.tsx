// ボタン用のコンポーネント

"use client";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: string;
  width: string;
  buttonstyle: "fill" | "outline" | "none";
  target?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { height, width, buttonstyle, target, children, ...others } = props;
  return (
    <button
      style={{
        height: `${height}`,
        width: `${width}`,
      }}
      className={`${buttonstyle}`}
      onClick={() => {
        if (target) {
          window.location.href = target;
        }
      }}
      {...others}
    >
      {children}
    </button>
  );
};
export default Button;
