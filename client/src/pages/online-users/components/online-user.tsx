import { Link } from "react-router-dom";
import { OnlineUserDTO } from "../../../dto/online-user.dto";

type OnlineUser = {
  user: OnlineUserDTO;
};
const OnlineUser = ({ user }: OnlineUser) => {
  return (
    <tr>
      <td>
        <Link to={user.Id}>{user.UserName}</Link>
      </td>
      <td className="text-center">{user.LoginTime.toDateString()}</td>
      <td className="text-center">{user.LastUpdateTime.toDateString()}</td>
      <td className="text-center">{user.LastLogin.toDateString()}</td>
      <td className="text-center">{user.IP}</td>
    </tr>
  );
};
export default OnlineUser;
