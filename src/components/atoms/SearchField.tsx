import SearchIcon from "@icons/SearchIcon";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const SearchField = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", onChange, placeholder, value, ...props }, ref) => {
    return (
      
      <div className="relative">
        <SearchIcon className={"absolute top-4 left-4"} />

        <input
          {...props}
          type="search"
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-white px-12 h-12 min-w-[30vw] border-transparent outline-none focus:border-transparent focus:ring-0 rounded-full`}
        />
      </div>
      
    );
  }
);

SearchField.displayName = "Search";

export { SearchField };
