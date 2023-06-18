import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValid } from "../redux/slices/redirectSlice";

const SignIn = () => {
  const validRedirect = useSelector((state) => state.redirect.valid);
  const dispatch = useDispatch();
  useEffect(() => {
    if (validRedirect) {
      dispatch(setValid(0));
    }
  }, [validRedirect]);

  return <Authenticator />;
};

export default SignIn;
