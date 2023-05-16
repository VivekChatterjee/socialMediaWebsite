import { Launch } from "@material-ui/icons";
import React from "react";
import Friends from "../../images/friends.jpg";
import JapanImg from "../../images/Japan.png";
import LondonImg from "../../images/London.png";
import "./rightbar.css";

export const HomeRightBar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Alexa</b> and <b>3 others</b> have a birthday today
        </span>
      </div>
      <img className="rightbarAd" src={Friends} alt="friends" />

      <div className="suggested_pages">
        <div className="suggested_pages-heading">
          <h3>Suggested Pages</h3>
          <span>see all</span>
        </div>
        <div className="suggested_pages-1">
          <img src={JapanImg} alt="japan" />
          <button>
            <Launch /> Like Page
          </button>
        </div>
        <div className="suggested_pages-2">
          <img src={LondonImg} alt="london" />
          <button>
            <Launch /> Like Page
          </button>
        </div>
      </div>
    </>
  );
};
