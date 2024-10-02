// ボタン用のコンポーネント

"use client";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: number;
  width: number;
  buttonstyle: "fill" | "outline" | "none";
  target?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { height, width, buttonstyle, target, children, ...others } = props;
  return (
    <button
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
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
