import { HTMLAttributes } from "react";

const BodyContainer = ({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...rest}
      className={`w-full 100vh mx-auto px-[4%] lg:px-[7%] 2xl:px-[10%] 
    ${className}`}
    >
      {children}
    </section>
  );
};

export default BodyContainer;

