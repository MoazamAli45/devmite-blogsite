import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

interface Props {
  headerNavLinks: {
    href: string;
    title: string;
    nestedCategories?: any[];
  }[];
}

const NavMobile = ({ headerNavLinks }: Props) => {
  const [open, setOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  Router.events.on("routeChangeComplete", () => setOpen(false));
  Router.events.on("routeChangeError", () => setOpen(false));

  return (
    <>
      <button
        type="button"
        className="cursor-pointer lg:hidden h-[30px] mt-[30px]"
        onClick={() => setOpen(true)}
      >
        <HiOutlineMenu className="text-3xl duration-150 hover:text-gray-600" />
      </button>

      <div
        className={`flex flex-col gap-2 bg-white dark:bg-[#1c1b22] lg:hidden w-[300px] fixed right-0 top-0 bottom-0 z-50 shadow-2xl ${
          open ? "translate-x-0" : "translate-x-[350px]"
        } duration-200 py-9`}
      >
        <button
          type="button"
          className={open ? "cursor-pointer self-end px-5" : "hidden"}
          onClick={() => setOpen(false)}
        >
          <MdOutlineClose className="text-3xl text-gray-600 duration-150 hover:text-black" />
        </button>

        {/* NAVBAR */}
        <nav className="flex flex-col gap-[30px] pl-10 text-[.85rem] overflow-y-auto">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="relative group">
              {link.nestedCategories && link.nestedCategories.length > 0 ? (
                <span
                  onClick={() => handleDropdownToggle(link.title)}
                  className={`text-xl capitalize cursor-pointer hover:text-[#8bc34a] duration-150`}
                >
                  {link.title}
                </span>
              ) : (
                <Link
                  href={link.href}
                  className={`text-xl capitalize hover:text-[#8bc34a] duration-150`}
                  passHref
                >
                  {link.title}
                </Link>
              )}

              {link.nestedCategories && openDropdown === link.title && (
                <div className="absolute top-[20px] left-0 bg-white dark:bg-black mt-3 shadow-lg rounded-lg w-[200px] max-w-[200px] z-10">
                  {link.nestedCategories.map((subcategory) => (
                    <Link
                      key={subcategory.title}
                      href={subcategory.href}
                      passHref
                    >
                      <span className="block pt-2 pb-4 px-4 mt-0 text-sm hover:bg-[rgba(128,128,128,.4)] text-black  dark:text-white text-[12px] w-full">
                        {subcategory.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* auth buttons */}
          <div className="flex gap-4">
            <Link href="/login">
              <span className="px-4 py-[6px] text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-lg cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                login
              </span>
            </Link>

            <Link href="/register">
              <span className="px-4 py-[6px] text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-lg cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                register
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* backdrop */}
      <div
        className={`lg:hidden ${
          open ? "" : "hidden"
        } fixed top-0 z-50 h-screen left-0 right-[300px] bg-transparent cursor-default`}
        onClick={() => setOpen(false)}
        role="button"
        tabIndex={0}
      />
    </>
  );
};

export default NavMobile;
