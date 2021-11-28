import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "./views/pages/Login";
import Menu from "./views/pages/Menu";
import Myprofile from "./views/pages/Myprofile";
import MyprofileChange from "./views/pages/MyprofileChange";
import Profile from "./views/pages/Profile";
import SignUp from "./views/pages/SignUp";
import Room from "./views/pages/Room";
import Talklist from "./views/pages/Talklist";
import NotFound from "./views/pages/NotFound";
import React from "react";
function App() {
  return (
    <div className="App" style={style}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/talklist" element={<Talklist />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/myprofile" element={<Myprofile />}>
          <Route path="/myprofile/change" element={<MyprofileChange />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
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
