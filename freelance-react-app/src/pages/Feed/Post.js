import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Post = forwardRef(
  (
    {
      postTitle,
      projDesc,
      projSpec,
      specReq,
      startDate,
      endDate,
      payType,
      amount,
      email,
      phoneNum,
      fullName,
      perEmail,
    },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar {...stringAvatar(fullName)} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h2>{postTitle}</h2>
            </div>
            <div className="post__headerDescription">
              <h4>Description:</h4>
              <p>{projDesc}</p>
            </div>
            <div className="post__headerDescription">
              <h4>Specifications:</h4>
              <p>{projSpec}</p>
            </div>
            <div className="post__headerDescription">
              <h4>Special Requests:</h4>
              <p>{specReq}</p>
            </div>
            <div className="post__headerDescription">
              <h4>
                Start Date:{" "}
                <span className="post__headerSpecial">{startDate}</span>
                <span className="post__spacing">
                  End Date:{" "}
                  <span className="post__headerSpecial">{endDate}</span>
                </span>
              </h4>
            </div>
            <div className="post__headerDescription">
              <h4>
                Pay Type: <span className="post__headerSpecial">{payType}</span>
                <span className="post__spacing">
                  Amount: <span className="post__headerSpecial">{amount}</span>
                </span>
              </h4>
            </div>
            <div className="post__headerDescription">
              <h4>
                Email: <span className="post__headerSpecial">{email}</span>
                <span className="post__spacing">
                  Phone Number:{" "}
                  <span className="post__headerSpecial">{phoneNum}</span>
                </span>
              </h4>
            </div>
          </div>
          <div className="post__footer">
            <h5>
              {fullName} <span className="post__headerSpecial">{perEmail}</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
