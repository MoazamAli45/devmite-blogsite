import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CategoriesDetail from "../../../components/CategoriesDetail";
import Categroies from "../../../components/Categroies";

//   COMMENTS DATA =============>
const comments = [
  {
    id: 1,
    name: "Jean Doe",
    dateTime: "JANUARY 9, 2018 AT 2:21PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    image:
      "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
  },
  {
    id: 2,
    name: "Jean Doe",
    dateTime: "JANUARY 9, 2018 AT 2:21PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    image:
      "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
    replies: [
      {
        id: 1,
        name: "Jean Doe",
        dateTime: "JANUARY 9, 2018 AT 2:21PM",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
        image:
          "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
        replies: [
          {
            id: 1,
            name: "Jean Doe",
            dateTime: "JANUARY 9, 2018 AT 2:21PM",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
            image:
              "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
          },
          {
            id: 2,
            name: "Jean Doe",
            dateTime: "JANUARY 9, 2018 AT 2:21PM",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
            image:
              "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Jean Doe",
    dateTime: "JANUARY 9, 2018 AT 2:21PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    image:
      "https://preview.colorlib.com/theme/meranda/images/person_1.jpg.webp",
  },
];

const Detail: React.FC = () => {
  const router = useRouter();
  const { mainCategory, detail } = useRouter().query;

  const [data, setData] = useState<any>(null);
  const [popularPosts, setPopularPosts] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any>({});

  // Function to check if a string can be converted to a number
  function isNumeric(value: any) {
    return /^-?\d+$/.test(value);
  }

  const fetchData = async () => {
    try {
      // API END POINT
      const response = await fetch(`/PostsData/${mainCategory}.json`);
      const data = await response.json();

      if (!data?.childCategories) {
        const popularPostsData =
          data.blogs &&
          data?.blogs?.filter((product: any) => product.popular === true);
        setPopularPosts(popularPostsData || []);
      }

      if (detail) {
        if (isNumeric(detail)) {
          const details = Array.isArray(detail) ? detail[0] : detail;

          // Fetch details of the specific blog based on the integer value
          const detailId = parseInt(details, 10);
          const itemData = data?.blogs.find(
            (devOpsItem: any) => devOpsItem.id === detailId
          );

          if (itemData) {
            setData(itemData);
          } else {
            console.error("Blog not found");
          }
        } else {
          //    MEANS  DETAIL PART IS STRING --------->
          // Find the category in the childCategories array
          const categoryData = data?.childCategories.find(
            (item: any) => item.category === detail
          );
          // console.log(categoryData, "Category");

          // Fetch popular posts for all child categories
          const allPopularPosts = data?.childCategories.flatMap((item: any) =>
            item.blogs.filter((blog: any) => blog.popular === true)
          );

          // Fetch popular posts for the specific category
          const categoryPopularPosts = categoryData?.blogs.filter(
            (blog: any) => blog.popular === true
          );

          setSubcategories(categoryData);
          setPopularPosts(categoryPopularPosts);
        }
      }
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [detail, mainCategory]);

  console.log(subcategories, "Subcategories");

  if (
    subcategories &&
    subcategories?.blogs &&
    subcategories?.blogs.length > 0
  ) {
    // Render UI for subcategories
    return (
      <Categroies
        posts={subcategories}
        popularPosts={popularPosts}
        link={subcategories?.href}
      />
    );
  }
  if (data) {
    return (
      <CategoriesDetail
        postsData={data}
        popularPosts={popularPosts}
        comments={comments}
        link={data?.href}
      />
    );
  }

  return;
  <div>Loading...</div>;
};

export default Detail;
