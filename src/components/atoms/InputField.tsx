import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`border border-app-gray_1/10 p-4 w-full rounded-md
      disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:border-app focus:ring-0
      ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

InputField.displayName = " InputField";

export { InputField };
