import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await API.get("freelanceapi", "/post");

      setPosts(data.data.Items.reverse());
    };
    getData();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Feed</h2>
      </div>

      {posts.map((post) => (
        <Post
          postTitle={post.postTitle.S}
          projDesc={post.projDesc.S}
          projSpec={post.projSpec.S}
          specReq={post.specReq.S}
          startDate={post.startDate.S}
          endDate={post.endDate.S}
          payType={post.payType.S}
          amount={post.amount.S}
          email={post.email.S}
          phoneNum={post.phoneNum.S}
          fullName={post.fullName.S}
          perEmail={post.perEmail.S}
        />
      ))}
    </div>
  );
};

export default Feed;
