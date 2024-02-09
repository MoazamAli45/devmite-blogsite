import instance from "./axiosInstance";

export const fetchPosts = async () => {
    try {
        const response = await instance.get("api/posts/");
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchCategories = async () => {
    try {
        const response = await instance.get("api/categories/");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};
