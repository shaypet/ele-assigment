import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./online-user-popup.scss";
import ApiEndPoint from "../../../../utils/api";
const OnlineUserPopup = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    ApiEndPoint.get(`/online-users/${userId}`)
      .then((res) => {
        setData(res.data.Data);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="online-user-popup">
      <div
        className="online-user-popup-overlay"
        onClick={() => {
          navigate("../");
        }}
      ></div>
      <div className="online-user-popup-content">
        <button
          onClick={() => {
            navigate("../");
          }}
        >
          x
        </button>

        {data && (
          <div className="text-center">
            <br />
            <br />
            <br />
            <br />
            <div>Username:{data.Username}</div>
            <div>UserAgent:{data.UserAgent}</div>
            <div>RegisterTime:{data.RegisterTime}</div>
            <div>LoginCount:{data.LoginCount}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default OnlineUserPopup;
