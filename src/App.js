import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./views/pages/Login";
import Menu from "./views/pages/Menu";
import Myprofile from "./views/pages/Myprofile";
import Profile from "./views/pages/Profile";
import SignUp from "./views/pages/SignUp";
import Room from "./views/pages/Room";
import Talklist from "./views/pages/Talklist";
import NotFound from "./views/pages/NotFound";
import React from "react";

function App() {
  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/:id/menu" component={Menu} />
            <Route path="/:id/talklist" component={Talklist} />
            <Route path="/:id/profile/:id" component={Profile} />
            <Route path="/:id/room/:id" component={Room} />
            <Route path="/:id/myprofile" component={Myprofile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export const style = {
  width: "95%",
  margin: "1rem auto",
  background: "skyBlue",
  border: "solid 2px blue",
};

export default App;
