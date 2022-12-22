import { Tab } from "@headlessui/react";
import { MenuProps } from "@utils/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import classNames from "classnames";

interface TNProps extends MenuProps {}

const TopNav = ({ defaultPaths, isLoggedIn }: TNProps) => {
  const router = useRouter();

  return (
    <>
      {/* <div className="bg-white rounded-full px-2 py-3"> */}
      <ul className="flex justify-center items-center space-x-4 bg-white rounded-full px-2 py-3">
        {defaultPaths.map((p) => (
          <li key={p.id}>
            <Link
              href={p.path}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                router.pathname === p.path || router.pathname === p.dynamicPath
                  ? "bg-app-gray_3 rounded-full"
                  : ""
              }`}
            >
              {p.text}
            </Link>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </>
  );
};

export default TopNav;
