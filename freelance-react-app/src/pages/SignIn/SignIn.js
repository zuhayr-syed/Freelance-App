import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValid } from "../../redux/slices/redirectSlice";
import TextField from "@mui/material/TextField";

const SignIn = () => {
  const validRedirect = useSelector((state) => state.redirect.valid);
  const dispatch = useDispatch();
  useEffect(() => {
    if (validRedirect) {
      dispatch(setValid(0));
    }
  }, [validRedirect]);

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
                  required="true"
                />
                <TextField
                  label="Last Name"
                  id="2"
                  placeholder="Enter your last name"
                  name="lastname"
                  type="text"
                  required="true"
                />
              </>
            );
          },
        },
      }}
    />
  );
};

export default SignIn;
