import NavBar from "@atoms/NavBar";
import { WithChildren } from "@utils/types/types";
import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

const MainLayout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main className={`${className} min-h-screen min-w-full`}>{children}</main>
    </>
  );
};

export default MainLayout;
