import Users from "../../Components/Users/Users";
import Style from "./UserData.module.css"


const UserData = () => {
    return (
        <div className={Style.user__data__container}>
            <Users/>
        </div>
    );
};

export default UserData;