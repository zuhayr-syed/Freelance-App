import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Feed from "./Feed";
import CreatePost from "./CreatePost";
import SignIn from "./SignIn";
import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/signedInSlice";
import { redirect, Navigate } from "react-router-dom";
import { setPage, setValid } from "../redux/slices/redirectSlice";

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
    <div className="App">
      <Router>
        <div className="navBar">
          <NavLink to="/" className="navText">
            <button
              onClick={() => {
                dispatch(setPage(""));
              }}
            >
              About
            </button>
          </NavLink>
          <NavLink to="/feed" className="navText">
            <button
              onClick={() => {
                dispatch(setPage("feed"));
              }}
            >
              Feed
            </button>
          </NavLink>
          <NavLink to="/create-post" className="navText">
            <button
              onClick={() => {
                dispatch(setPage("create-post"));
              }}
            >
              Create a Post
            </button>
          </NavLink>
          {signedIn ? (
            <button onClick={signOut}>Sign Out</button>
          ) : (
            <NavLink to="/sign-in" className="navText">
              <button onClick={signIn}>Sign In</button>
            </NavLink>
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
