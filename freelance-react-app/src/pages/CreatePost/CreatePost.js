import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../redux/slices/signedInSlice";
import TextField from "@mui/material/TextField";
import { setEmail, setFirst, setLast } from "../../redux/slices/userInfoSlice";

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
  const first = useSelector((state) => state.userInfo.first);
  const last = useSelector((state) => state.userInfo.last);
  const dispatch = useDispatch();

  // console.log("first: ", first);
  // console.log("last: ", last);

  return (
    <Authenticator
      // Default to Sign Up screen
      initialState="signUp"
      // Customize `Authenticator.SignUp.FormFields`
      components={{
        SignUp: {
          FormFields() {
            return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* Append & require Terms & Conditions field to sign up  */}
                <TextField
                  label="First Name"
                  id="1"
                  placeholder="Enter your first name"
                  name="firstname"
                  type="text"
                  required
                  value={first}
                  onChange={(e) => dispatch(setFirst(e.target.value))}
                />
                <TextField
                  label="Last Name"
                  id="2"
                  placeholder="Enter your last name"
                  name="lastname"
                  type="text"
                  required
                  value={last}
                  onChange={(e) => dispatch(setLast(e.target.value))}
                />
              </>
            );
          },
        },
      }}
    >
      {/* {({ signOut, user }) => ( */}
      {/* // <main>
        //   <h1>Hello {user.username}</h1>
        //   <button onClick={signOut}>Sign out</button>
        // </main> */}
      <div className="create">
        <h2 className="create__header">Create A Post</h2>
        <button onClick={getInfo}>Get user info</button>
      </div>
      {/* )} */}
    </Authenticator>
  );
};

export default CreatePost;
