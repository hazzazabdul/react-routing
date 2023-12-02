/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Style from "./Users.module.css";
import men from "../../assets/Images/icons8-react-office-m/man_180651.png"

const User = ({ user }) => {
  const { id, name, email, company } = user;
  return (
    <div className={Style.userCard}>
      <div className={Style.imageWraper}>
        <img
          src={men}
        />
      </div>
      <div className={Style.cardBody}>
        <h3>
          <span>Name:</span> {name}
        </h3>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Company:</span> {company.name}
        </p>
      <div className={Style.navlink}>
        <Link to={`/users/${id}`}>
          <button>Details</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default User;
