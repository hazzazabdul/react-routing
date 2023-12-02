/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Style from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={Style.hero}>
        <div className={Style.hero__content}>
          <p>Wellcome</p>
          <h2>I'm Hazzaz.</h2>
          <Link to={"/contact"}>
            <button>Contact Me</button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Home;
