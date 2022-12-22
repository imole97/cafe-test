import Logo from "@icons/Logo";
import NavMenu from "@molecules/NavMenu";
import { defaultPaths } from "@utils/paths";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Container from "./Container";
import NavBarSub from "./NavBarSub";
import TopNav from "./TopNav";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  return (
    <>
      <nav
        className={`fixed top-0 right-0 w-full bg-app pt-2 overflow-hidden z-10`}
      >
        <div className="relative">
          <Container
            className={`relative flex items-center justify-between ${
              id ? "mb-6" : ""
            }`}
          >
            <Logo />

            <TopNav defaultPaths={defaultPaths} isLoggedIn={true} />

            <NavMenu />
          </Container>
          {!id && (
            <>
              <NavBarSub />

              <Image
                src="/images/navImage.jpg"
                alt="nav image"
                width={150}
                height={300}
                className="mt-12 mr-20 right-0 top-10 absolute z-[-1]"
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
