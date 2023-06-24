import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Posts" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
      </div>
    </div>
  );
}

export default Widgets;
