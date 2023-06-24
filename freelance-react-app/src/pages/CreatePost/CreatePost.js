import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    name: {
      order: 2,
    },
    family_name: {
      order: 3,
    },
    password: {
      order: 4,
    },
    confirm_password: {
      order: 5,
    },
  },
};

const CreatePost = () => {
  return (
    <Authenticator formFields={formFields}>
      {/* {({ signOut, user }) => ( */}
      {/* // <main>
        //   <h1>Hello {user.username}</h1>
        //   <button onClick={signOut}>Sign out</button>
        // </main> */}
      <div className="create">
        <h2
          className="create__header"
          style={{ paddingLeft: 30, paddingTop: 30 }}
        >
          Create A Post
        </h2>
      </div>
      {/* )} */}
    </Authenticator>
  );
};

export default CreatePost;
