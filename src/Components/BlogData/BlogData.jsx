/* eslint-disable react/jsx-key */
import useFetch from "../../Utilities/usefetch";
import Blogs from "../Blogs/Blogs";
import Styele from "./BlogData.module.css";

const BlogData = () => {
  const { fetchData: blogData, error: blogError } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return (
    <div className={Styele.blog__data}>
      <h1>Blogs</h1>
      <div className={Styele.blog__container}>
        {blogError ? (
          <h1>{blogError}</h1>
        ) : (
          blogData.slice(0, 9).map((blog) => <Blogs blogDetails={blog} />)
        )}
      </div>
    </div>
  );
};

export default BlogData;
