import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NavbarD from "./components/Home_components/Navbar";
import SignIn from "./components/Login_page/login";
import SignUp from "./components/Login_page/signup";
import Reset_email from "./components/Login_page/Password_reset";
import Password_reset from "./components/Login_page/Reset";
import Aboutus from "./components/Aboutus/Aboutus";
import Contact from "./components/Aboutus/Contact";
const App = () => (
  <BrowserRouter>
    <NavbarD />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/reset" exact component={Reset_email} />
      <Route path="/reset-password" exact component={Password_reset} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default App;
