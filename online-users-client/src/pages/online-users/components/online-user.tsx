import { Link } from "react-router-dom";
import { OnlineUserDTO } from "../../../dto/online-user.dto";

type OnlineUser = {
  user: OnlineUserDTO;
};
const OnlineUser = ({ user }: OnlineUser) => {
  return (
    <tr>
      <td>
        <Link to={user.UserId}>{user.Username}</Link>
      </td>
      <td className="text-center">{user.LoginTime}</td>
      <td className="text-center">{user.LastUpdate}</td>
      <td className="text-center">{user.LastLogin}</td>
      <td className="text-center">{user.UserIP}</td>
    </tr>
  );
};
export default OnlineUser;
