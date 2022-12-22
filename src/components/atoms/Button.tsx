import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface GradientBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({
  className = "",
  children,
  type = "button",
  ...props
}: GradientBtnProps) => {
  return (
    <button type={type} {...props} className={`btnMain ${className}`}>
      {children}
    </button>
  );
};

export default Button;
