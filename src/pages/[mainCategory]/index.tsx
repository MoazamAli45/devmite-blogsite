import Head from "next/head";
import React, { useEffect, useState } from "react";

import Categroies from "../../components/Categroies";
import { useRouter } from "next/router";

interface PageProps {
  posts: {
    category: string;
    href: string;
    blogs: PostData[];
  };
  popularPosts: PostData[];
}
const Shop: React.FC<PageProps> = () => {
  const { mainCategory } = useRouter().query;
  console.log(mainCategory);
  const [posts, setPosts] = useState({
    category: "",
    blogs: [],
    href: "", // Default value or whatever you want
  });

  const [popularPosts, setPopularPosts] = useState<PostData[]>([]);

  const fetchData = async () => {
    try {
      // FETCHING API DATA
      const response = await fetch(`/PostsData/${mainCategory}.json`);
      const data = await response.json();

      console.log("Data", data);
      let filteredPopularPosts;
      // Check if 'blogs' property exists and is not empty
      if (data?.blogs && data.blogs.length > 0) {
        filteredPopularPosts = data.blogs.filter(
          (product: PostData) => product.popular === true
        );

        setPosts(data);
        console.log("Posts", posts);
        setPopularPosts(filteredPopularPosts || []);
      } else {
        // If 'blogs' is empty or doesn't exist, set 'posts' to an empty object
        setPosts({
          category: "",
          blogs: [],
          href: "",
        });
        setPopularPosts([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [mainCategory]); // Include mainCategory in the dependency array to re-run the effect when it changes

  return (
    <div>
      <Head>
        <title>Devmite | Shop</title>
        <link rel="icon" href="/devicon.ico" />
      </Head>
      {/*    TO DISPLAY ALL CATEGORIES POSTS */}
      <Categroies posts={posts} popularPosts={popularPosts} link={posts.href} />
    </div>
  );
};

export default Shop;
