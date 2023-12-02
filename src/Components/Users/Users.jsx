/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import User from "./User";
import Style from "./Users.module.css"

const Users = () => {
  const usersData = useLoaderData();
  return (
    <>
    <h1 className={Style.user__heading}>Users</h1>
    <div className={Style.users}>

      {usersData.map((user) => (
        <User user={user} />
      ))}
    </div>
    </>
  );
};

export default Users;
