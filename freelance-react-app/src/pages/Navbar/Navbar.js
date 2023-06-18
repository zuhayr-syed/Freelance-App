import "./Navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";
import Feed from "../Feed/Feed";
import CreatePost from "../CreatePost/CreatePost";
import SignIn from "../SignIn";
import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../redux/slices/signedInSlice";
import { redirect, Navigate } from "react-router-dom";
import { setPage, setValid } from "../../redux/slices/redirectSlice";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Button from "@mui/material/Button";

function Navbar() {
  const signedIn = useSelector((state) => state.signedIn.logged);
  const pageRedirect = useSelector((state) => state.redirect.page);
  const validRedirect = useSelector((state) => state.redirect.valid);
  const dispatch = useDispatch();

  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          dispatch(setValid(1));
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
    } catch (err) {}
  }

  const signIn = async () => {
    redirect("/sign-in");
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <div className="app">
      <Router>
        <div className="navBar">
          <ConnectWithoutContactIcon className="sidebar__Icon" />
          <h2 className="greetingText">Hello _____________!</h2>
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
          {signedIn ? (
            <div className="sidebarLogin">
              <Button className="loginButton" fullWidth onClick={signOut}>
                Sign Out
              </Button>
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
