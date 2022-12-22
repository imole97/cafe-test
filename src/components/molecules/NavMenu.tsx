import { Menu, Transition } from "@headlessui/react";
import Chevron from "@icons/Chevron";
import { authPaths } from "@utils/paths";
import Link from "next/link";
import React, { Fragment } from "react";

const NavMenu = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center menu-button">
            Admin
            <Chevron
              className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="menu-items">
            <div className="px-1 py-2">
              <ul>
                {authPaths.map((p,i) => (
                  <li className="mb-2" key={i}>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href={`${p.path}`}>
                          <div
                            className={`${
                              active
                                ? "bg-app-gray_2 text-white"
                                : "text-gray-900"
                            } w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {p.text}
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  </li>
                ))}
              </ul>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavMenu;
