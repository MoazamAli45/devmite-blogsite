import CategoriesDetail from "../../../../components/CategoriesDetail";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const DevOpsDetail: React.FC = () => {
  const router = useRouter();
  const { mainCategory, detail, id } = router.query;
  console.log(mainCategory, detail, id);

  const [data, setData] = useState<any>(null);
  const [popularPosts, setPopularPosts] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`/PostsData/${mainCategory}.json`);
      const data = await response.json();
      if (data?.blogs) {
        const popularPostsData = data?.blogs?.filter(
          (product: any) => product.popular === true
        );
        setPopularPosts(popularPostsData || []);
      }

      const categoryData = data?.childCategories.find(
        (item: any) => item.category === detail
      );
      // Access the 'id' from the URL parameters
      const itemId = id?.toString();

      // Find the corresponding itemData based on the 'id'
      const itemData = categoryData?.blogs.find(
        (item: any) => item.id.toString() === itemId
      );

      const popularPostsData = categoryData?.blogs?.filter(
        (product: any) => product.popular === true
      );
      setPopularPosts(popularPostsData || []);
      if (itemData) {
        setData(itemData);
      } else {
        console.error("DevOps itemId not found");
      }
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]); // Include 'id' in the dependency array to re-run the effect when 'id' changes

  if (!data) {
    return (
      <div className="container flex items-center justify-center">
        Loading...
      </div>
    ); // You can replace this with a loading component or any other UI indication
  }
  return (
    <CategoriesDetail
      postsData={data}
      popularPosts={popularPosts}
      comments={comments}
      link={data?.href || `/${mainCategory}/${detail}`}
    />
  );
};

export default DevOpsDetail;
