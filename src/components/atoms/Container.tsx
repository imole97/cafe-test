import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div
      {...rest}
      className={`w-full mx-auto
      px-[1px]  max-w-screen-2xl`}
    >
      <div
        className={`mx-3.5 md:mx-[2.5%] 2xl:mx-12 desktop-des:mx-0 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
