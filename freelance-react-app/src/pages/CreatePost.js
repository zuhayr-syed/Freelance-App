import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

const signOut = async () => {
  await Auth.signOut();
};

const CreatePost = () => {
  return (
    <Authenticator>
      <div>
        <h1>Create A Post</h1>
        <h3>Fill in the fields below</h3>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </Authenticator>
  );
};

export default CreatePost;
