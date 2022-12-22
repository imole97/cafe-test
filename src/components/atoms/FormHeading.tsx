import React from "react";
type HeadingProps = {
  text: string;
  className?: string;
};

const FormHeading = ({text, className}: HeadingProps) => {
  return (
    <div className="text-center mt-2">
      <h1 className={`relative overflow-hidden ${className}`}>
        {text}
      </h1>
    </div>
  );
};

export { FormHeading };
