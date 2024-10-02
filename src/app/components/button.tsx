// ボタン用のコンポーネント
interface ButtonProps {
  height: number;
  width: number;
  style: "fill" | "outline" | "none";
  type?: "button" | "submit";
  className?: string;
  target?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {};
export default Button;
