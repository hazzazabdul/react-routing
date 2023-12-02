import { Link } from "react-router-dom";
import Style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Style.header}>
      <div className={Style.image}>
        <h1 className={Style.logo}>
          <Link to={"  "}>Rounting</Link>
        </h1>
      </div>

      <nav className={Style.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <Link to={"/login"}>
            <button className={Style.login}>Log In</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
