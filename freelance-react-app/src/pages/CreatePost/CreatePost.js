import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { setFirst, setLast } from "../../redux/slices/userInfoSlice";

const CreatePost = () => {
  const first = useSelector((state) => state.userInfo.first);
  const last = useSelector((state) => state.userInfo.last);
  const dispatch = useDispatch();

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
