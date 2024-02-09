import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconSet from "./IconSet";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const headerDetails = { logoName: "Devmite.com" };

interface NavLink {
  href: string;
  title: string;
  nestedCategories?: any[];
}

function Header() {
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  //     FOR SHOWING MENU
  const [showSubcategories, setShowSubcategories] = useState(null);

  const handleLinkClick = (e: any, link: any, index: any) => {
    if (link.nestedCategories.length > 0) {
      e.preventDefault();
    }
    // Toggle the visibility of subcategories
    setShowSubcategories(showSubcategories === index ? null : index);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/PostsData/blogs.json");
      const data = await response.json();

      // Extract category data from the JSON
      const categories = data.map((categoryData: any) => {
        const category = categoryData.category;
        const title = categoryData.title;
        const href = categoryData.href;
        const childCategories = categoryData.childCategories;

        // Check if childCategories exist to determine nestedCategories
        const nestedCategories = childCategories
          ? childCategories.map((childCategory: any) => ({
              href: childCategory.href,
              title: childCategory.title,
            }))
          : [];

        return { category, title, href, nestedCategories };
      });

      // Create headerNavLinks based on the extracted categories
      const headerNavLinks = categories.map((category: any) => ({
        href: category.href,
        title: category.title,
        nestedCategories: category.nestedCategories,
      }));

      // Add two static titles and hrefs
      headerNavLinks.push(
        { href: "/contact_us", title: "Contact Us" },
        { href: "/write_for_us", title: "Write For Us" }
      );
      headerNavLinks.unshift({ href: "/", title: "Home" });

      // Optionally, you can log the final headerNavLinks array
      setNavLinks(headerNavLinks);

      // Now you can use headerNavLinks in your code as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //   FOR NAVLINKS
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      <div className="container flex justify-between lg:block">
        <header className="flex flex-col gap-5 lg:flex-row lg:items-center py-[30px]">
          {/* left */}
          <div className="flex-1 flex flex-col gap-[10px]">
            {/* icons on mobile view */}
            <IconSet className="flex lg:hidden gap-4 items-center w-[245px] md:w-max flex-wrap max-h-10 overflow-hidden" />

            {/* logo */}
            <Link href="/" aria-label="Devmite.com">
              <div className="flex items-center cursor-pointer max-w-max">
                <Logo />

                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-200 hover:text-[#649130] duration-200">
                  {headerDetails.logoName}
                </div>
              </div>
            </Link>
          </div>

          <IconSet className="items-center hidden gap-8 lg:flex" />
        </header>

        {/* menu/tab small device */}
        <NavMobile headerNavLinks={navLinks} />
      </div>

      {/* menu/tab large device */}
      <div className="sticky top-0 z-40 hidden dark:bg-[#121212] bg-white dark:border-[#42404d] border-b shadow-sm lg:block">
        <nav className="container flex items-center justify-between">
          {/* tabs */}
          <div className="flex gap-10 text-[.85rem]  py-4 relative">
            {navLinks.map((link, index) => (
              <>
                <Link href={link.href} key={link.title}>
                  <span className="uppercase cursor-pointer relative group">
                    {link.title}
                    {/*  NESTED LINKS */}
                    {link?.nestedCategories &&
                      link?.nestedCategories.length > 0 && (
                        <div
                          className={`${
                            link.nestedCategories.length > 5
                              ? "overflow-y-auto"
                              : ""
                          }  absolute top-[5px] left-0 bg-white dark:bg-black  mt-3 shadow-lg rounded-lg   p-[10px] w-max   opacity-0 group-hover:opacity-100 z-10`}
                        >
                          {link.nestedCategories.map((subcategory) => (
                            <Link
                              key={subcategory?.title}
                              href={subcategory.href}
                              className="block py-2 px-4 mt-[10px] text-sm hover:bg-[rgba(128,128,128,.4)]  text-black dark:text-white  text-[12px] w-full rounded-lg "
                            >
                              {subcategory.title}
                            </Link>
                          ))}
                        </div>
                      )}
                  </span>
                </Link>
              </>
            ))}
          </div>

          {/* auth buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-sm cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                login
              </span>
            </Link>

            <Link href="/register">
              <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-sm cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                register
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
