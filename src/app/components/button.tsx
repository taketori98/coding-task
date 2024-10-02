// ボタン用のコンポーネント
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: number;
  width: number;
  buttonstyle: "fill" | "outline" | "none";
  target?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {};
export default Button;
