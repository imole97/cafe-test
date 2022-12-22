import InputError from "@atoms/InputError";
import { InputField } from "@atoms/InputField";
import { PasswordInput } from "@atoms/PasswordInput";
import { ClassName } from "@utils/types/types";
import React, {
  ChangeEventHandler,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode
} from "react";
import FileUploadInput from "./FileUploadInput";

interface FIProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelContent: ReactNode;
  errorContent?: ReactNode;
  labelClassName?: ClassName;
  errorClassName?: ClassName;
  inputClassName?: ClassName;
  children?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormInput = forwardRef<HTMLInputElement, FIProps>(
  (
    {
      labelContent,
      errorContent,
      className,
      labelClassName,
      errorClassName,
      inputClassName,
      children,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${className}`}>
        <label className={`sr-only ${labelClassName}`}>{labelContent}</label>

        {props.type === "password" ? (
          <PasswordInput {...props} ref={ref} className={`${inputClassName}`} />
        ) : (
          <>
            {props.type === "file" ? (
              <FileUploadInput
                id={props.id as string}
                ref={ref}
                className={`${inputClassName}`}
                onChange={onChange}
              >
                {children}
              </FileUploadInput>
            ) : (
              <InputField
                {...props}
                ref={ref}
                className={`${inputClassName}`}
              />
            )}
          </>
        )}
        {typeof errorContent === "string" ? (
          <InputError text={errorContent} className={errorClassName} />
        ) : (
          <InputError ErrorRender={() => <>{errorContent}</>} />
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
