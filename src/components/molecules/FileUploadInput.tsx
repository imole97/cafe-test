import {
  ChangeEventHandler,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from "react";

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
  id: string;
  warning?: string;
  upload?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const FileUploadInput = forwardRef<HTMLInputElement, Props>(
  function FileUploadInput(
    { className = "", id, onChange, children, ...props },
    ref
  ) {
    return (
      <>
        <label
          htmlFor={id}
          className={`bg-app-gray_6 border-dashed border-4 border-[#E0E2E9] py-8 mt-10 rounded-lg flex items-center ${className}`}
        >
          <input
            ref={ref}
            type="file"
            id={id}
            className={`w-0 hidden`}
            onChange={onChange}
            // ${className}`}
            {...props}
          />
          <div className="flex flex-col items-center space-x-2 w-full" id={id}>
            {children}
          </div>
        </label>
      </>
    );
  }
);

export default FileUploadInput;
