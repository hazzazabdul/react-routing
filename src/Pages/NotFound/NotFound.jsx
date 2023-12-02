import { Link } from "react-router-dom";
import Style from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={Style.not__found}>
      <h1>oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might have been removed had its name
        changed or s temporaily unavailable
      </p>

      <Link to={"/"}>
        <button className={Style.error}>Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
