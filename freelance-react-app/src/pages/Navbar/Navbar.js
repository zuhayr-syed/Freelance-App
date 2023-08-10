import "./Navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Feed from "../Feed/Feed";
import CreatePost from "../CreatePost/CreatePost";
import SignIn from "../SignIn/SignIn";
import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../redux/slices/signedInSlice";
import { redirect, Navigate } from "react-router-dom";
import { setPage, setValid } from "../../redux/slices/redirectSlice";
import { setEmail, setFullName } from "../../redux/slices/userInfoSlice";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Button from "@mui/material/Button";
import Widgets from "../Widget/Widget";

function Navbar() {
  const signedIn = useSelector((state) => state.signedIn.logged);
  const pageRedirect = useSelector((state) => state.redirect.page);
  const validRedirect = useSelector((state) => state.redirect.valid);
  const dispatch = useDispatch();

  const fullName = useSelector((state) => state.userInfo.fullName);
  const email = useSelector((state) => state.userInfo.email);

  useEffect(() => {
    authListener();
    getUserInfo();
  }, []);

  useEffect(() => {
    setNames();
  }, [email]);

  const setNames = async () => {
    if (!fullName) {
      let user = await Auth.currentAuthenticatedUser();
      dispatch(setFullName(user.attributes.name));
    }
  };

  const getUserInfo = async () => {
    let user = await Auth.currentAuthenticatedUser();
    if (user.attributes.email) {
      dispatch(setEmail(user.attributes.email));
    }
    if (user.attributes.name) {
      dispatch(setFullName(user.attributes.name));
    }
  };

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          dispatch(setValid(1));
          getUserInfo();
          return dispatch(setStatus(1));
        case "signOut":
          return dispatch(setStatus(0));
        default:
          return dispatch(setStatus(0));
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      dispatch(setStatus(1));
      getUserInfo();
    } catch (err) {}
  }

  const signIn = async () => {
    redirect("/sign-in");
  };

  const signOut = async () => {
    try {
      dispatch(setFullName(""));
      dispatch(setEmail(""));
      await Auth.signOut();
      window.location.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  async function deleteUser() {
    try {
      dispatch(setFullName(""));
      dispatch(setEmail(""));
      const result = await Auth.deleteUser();
      window.location.reload();
      console.log(result);
    } catch (error) {
      console.log("Error deleting user", error);
    }
  }

  return (
    <div className="app">
      <Router>
        <div className="navBar">
          <ConnectWithoutContactIcon className="sidebar__Icon" />
          <h2 className="greetingText">
            Hello{email ? " " + fullName : null}!
          </h2>
          <NavLink to="/">
            <Button
              className="sidebarOption"
              fullWidth
              onClick={() => {
                dispatch(setPage(""));
              }}
            >
              About
            </Button>
          </NavLink>
          <NavLink to="/feed">
            <Button
              className="sidebarOption"
              fullWidth
              onClick={() => {
                dispatch(setPage("feed"));
              }}
            >
              Feed
            </Button>
          </NavLink>
          <div className="sidebarButton">
            <NavLink to="/create-post">
              <Button
                className="createPost"
                fullWidth
                onClick={() => {
                  dispatch(setPage("create-post"));
                }}
              >
                Create a Post
              </Button>
            </NavLink>
          </div>
          {signedIn || email ? (
            <div>
              <div className="sidebarLogin">
                <Button className="loginButton" fullWidth onClick={signOut}>
                  Sign Out
                </Button>
              </div>
              <div className="deleteUser">
                <Button className="loginButton" fullWidth onClick={deleteUser}>
                  Delete User
                </Button>
              </div>
            </div>
          ) : (
            <div className="sidebarLogin">
              <NavLink to="/sign-in">
                <Button className="loginButton" fullWidth onClick={signIn}>
                  Sign In
                </Button>
              </NavLink>
            </div>
          )}
          {validRedirect ? <Navigate to={`/${pageRedirect}`} /> : null}
        </div>
        <Routes>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </Router>
      {window.location.href.slice(22) === "feed" && (
        <Widgets className="widget" />
      )}
    </div>
  );
}

export default Navbar;
