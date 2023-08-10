import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        postTitle: "New Post",
        projDesc: "This is the description",
        projSpec: "This is the specifications",
        specReq: "These are my requests",
        startDate: "08/09/2023",
        endDate: "08/20/2023",
        payType: "hourly",
        amount: "2300",
        email: "email123@gmail.com",
        phoneNum: "9059051234",
        fullName: "Zuhayr Syed",
        perEmail: "zuhayr.syed@uwaterloo.ca",
      },
      {
        postTitle: "Another Post",
        projDesc:
          "description description description description description description description",
        projSpec: "specifications specifications specifications specifications",
        specReq: "requests requests requests requests requests",
        startDate: "08/09/2023",
        endDate: "08/20/2023",
        payType: "hourly",
        amount: "2300",
        email: "email123@gmail.com",
        phoneNum: "9059051234",
        fullName: "Zuhayr Syed",
        perEmail: "zuhayr.syed@uwaterloo.ca",
      },
    ]);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Feed</h2>
      </div>

      {posts.map((post) => (
        <Post
          postTitle={post.postTitle}
          projDesc={post.projDesc}
          projSpec={post.projSpec}
          specReq={post.specReq}
          startDate={post.startDate}
          endDate={post.endDate}
          payType={post.payType}
          amount={post.amount}
          email={post.email}
          phoneNum={post.phoneNum}
          fullName={post.fullName}
          perEmail={post.perEmail}
        />
      ))}
    </div>
  );
};

export default Feed;
