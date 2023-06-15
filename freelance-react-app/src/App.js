import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navBar">
          <NavLink exact activeClassName="active" to="/" className="navText">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/feed" className="navText">
            Feed
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/create-post"
            className="navText"
          >
            Create a Post
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
