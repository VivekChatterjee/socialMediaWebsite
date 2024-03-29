import { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Events from "./pages/events/Events";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Market from "./pages/market/Market";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Users from "./pages/users/Users";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
