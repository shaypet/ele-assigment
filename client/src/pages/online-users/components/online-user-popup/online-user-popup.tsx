import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./online-user-popup.scss";
const OnlineUserPopup = () => {
  const userId = useParams();
  const navigate = useNavigate();

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
      </div>
    </div>
  );
};
export default OnlineUserPopup;
