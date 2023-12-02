import { useLoaderData } from "react-router-dom";
import Style from "./Userid.module.css";
import userImg from "../../assets/Images/icons8-react-office-m/man_180651.png";
const UserId = () => {
  const { name, email, phone, company, address, website } = useLoaderData();
  return (
    <div className={Style.userDetails}>
      <div className={Style.userDetailsContainer}>
        <div className={Style.userImg}>
          <img
            src={userImg}
            alt=""
          />
        </div>
        <div className={Style.user__details}>
          <h2>
            <span>Name:</span>
            {name}
          </h2>
          <p>
            <span>Email:</span>
            {email}
          </p>
          <p>
            <span>Phone:</span>
            {phone}
          </p>
          <p>
            <span>Company:</span>
            {company.name}
          </p>
          <p>
            <span>Address:</span>
            {address.street}
          </p>
          <p>
            <span>Website:</span>
            {website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserId;
