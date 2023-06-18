import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/signedInSlice";

const getInfo = async () => {
  // let user = await Auth.currentAuthenticatedUser();
  // console.log("attributes:", user.attributes);
  //
  // if (user.attributes.given_name) {
  //   console.log("you already have the name: ", user.attributes.given_name);
  // } else {
  //   console.log("YOU DO NOT HAVE A NAME SET YET");
  // }
  //
  // const result = await Auth.updateUserAttributes(user, {
  //   given_name: "Test",
  //   family_name: "123",
  // });
  // console.log(result);
  // console.log("attributes:", user.attributes);
};

const CreatePost = () => {
  return (
    <Authenticator>
      <div>
        <h1>Create A Post</h1>
        <h3>Fill in the fields below</h3>
        <button onClick={getInfo}>Get user info</button>
      </div>
    </Authenticator>
  );
};

export default CreatePost;
