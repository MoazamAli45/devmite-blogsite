// utils/fetchData.ts
interface NavLink {
  href: string;
  title: string;
  subLinks?: NavLink[];
}

const generateNavLinks = (categories: any[]): NavLink[] => {
  return categories.map((category: any) => {
    const navLink: NavLink = {
      href: `/${category.category.toLowerCase().replace(" ", "_")}`,
      title: category.category,
    };

    if (category.childCategories && category.childCategories.length > 0) {
      navLink.subLinks = generateNavLinks(category.childCategories);
    }

    return navLink;
  });
};

const getHeaderNavLinks = async (): Promise<NavLink[]> => {
  try {
    const response = await fetch("../../data/PostsData/cloud-networking.json");
    const data = await response.json();

    const headerNavLinks: NavLink[] = [
      { href: "/", title: "home" },
      { href: "/devops", title: "DevOps" },
      { href: "/devsecops", title: "DevSecOps" },
      { href: "/cloud_networking", title: "Cloud Networking" },
      { href: "/shop", title: "shop" },
      { href: "/contact_us", title: "contact us" },
      { href: "/write_for_us", title: "write for us" },
    ];

    const cloudNetworkingNavLinks = generateNavLinks(
      data.childCategories.find((cat: any) => cat.category === "Cloud-Networks")
        .childCategories
    );

    headerNavLinks.splice(3, 0, ...cloudNetworkingNavLinks);
    console.log(headerNavLinks);
    return headerNavLinks;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default getHeaderNavLinks;
