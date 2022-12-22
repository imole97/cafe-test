import Eye from "@icons/Eye";
import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    forwardRef,
  } from "react";
  
  import { InputField } from "./InputField";

  export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}


  const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", ...props }, ref) => {
      const [open, setOpen] = React.useState(false);
      const toggle = () => {
        setOpen(!open);
      };
  
      const inputProps = { ...props };
      delete inputProps.type;
  
      return (
        <div className="relative">
          <InputField
            type={open ? `text` : `password`}
            {...inputProps}
            ref={ref}
            className={`w-full !pr-14 ${className}`}
          />
  
          <button
            type="button"
            onClick={toggle}
            className="absolute -translate-y-1/2 top-2/4 right-5"
          >
            <Eye show={open} />
          </button>
        </div>
      );
    }
  );
  
  PasswordInput.displayName = "PasswordInput";
  
  export { PasswordInput };