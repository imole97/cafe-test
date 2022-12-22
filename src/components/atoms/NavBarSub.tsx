import { defaultPaths } from "@utils/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";

const NavBarSub = () => {
  const router = useRouter();
  let navtext = defaultPaths.map((p) =>
    router.pathname === p.path ? p.navtext : null
  );

  if (router.pathname === "/create-blog") {
    navtext = ["Create Blog posts for cafe one here"]
  }

  return (
    <>
      <p className="mb-6 text-white ml-10 mt-8">Welcome Admin,</p>
      {navtext.map((txt, i) => (
        <p className="font-light text-sm mb-8 text-white ml-10" key={i}>
          {txt}
        </p>
      ))}

      {router.pathname === "/blogs" ? (
        <Link href={"/create-blog"}>
          <Button className="bg-app-red rounded-full ml-10 mb-4 text-sm">
            Create New Blog Post
          </Button>
        </Link>
      ) : null}
    </>
  );
};

export default NavBarSub;
