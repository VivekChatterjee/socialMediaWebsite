import {
  Bookmark,
  DynamicFeed,
  Event,
  ExitToApp,
  Group,
  StorefrontOutlined,
  VideoLibrary,
  Work,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./leftbar.css";

export default function Leftbar() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="leftBar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem" onClick={() => history.push("/")}>
            <DynamicFeed className="leftbarIcon feed-icon" />
            <span className="leftbarListItemText ">Feed</span>
          </li>
          <li className="leftbarListItem">
            <VideoLibrary className="leftbarIcon video-icon" />
            <span className="leftbarListItemText ">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon group-icon" />
            <span className="leftbarListItemText ">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon event-icon" />
            <span className="leftbarListItemText ">Events</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon bookmark-icon" />
            <span className="leftbarListItemText ">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <Work className="leftbarIcon job-icon" />
            <span className="leftbarListItemText ">Jobs</span>
          </li>
        </ul>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <p>More Pages</p>
          <li
            className="leftbarBottomListItem"
            onClick={() => history.push("/events")}
          >
            <Event className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Latest Events</span>
          </li>
          <li className="leftbarBottomListItem">
            <a
              href="/market"
              className="leftbarBottomListItem"
              style={{ marginBottom: "-.2rem", textDecoration: "none" }}
            >
              <StorefrontOutlined className="leftbarBottomIcon" />
              <span className="leftbarListItemText ">Market Place</span>
            </a>
          </li>
        </ul>

        <button className="logoutBtn" onClick={handleLogout}>
          <ExitToApp /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
