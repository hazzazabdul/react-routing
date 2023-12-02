/* eslint-disable react/prop-types */
import Style from "./Blogs.module.css";

const Blogs = ({ blogDetails }) => {
  const {name, body } = blogDetails;
  return (
    <div className={Style.blog__card}>
      <h3>Name: {name.slice(0, 20)}</h3>
      <p>Blog: {body}</p>
    </div>
  );
};

export default Blogs;
