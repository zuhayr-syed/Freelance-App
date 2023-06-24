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

const SignIn = () => {
  return <Authenticator formFields={formFields} />;
};

export default SignIn;
