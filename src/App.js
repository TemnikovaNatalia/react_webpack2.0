import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Main } from "./pages/Main";
import { Chats } from "./pages/Chats";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar/NavBar";
import { SignIn } from "./pages/SingIn";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import { SignUp } from "./pages/SingUp";
import { Profile } from "./pages/Profile";
import { Dogs } from "./pages/Dogs";

export function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chats">
            <Route exact path="/chats">
              <Redirect to="/chats/1" />
            </Route>
            <Route path="/chats/:chatId" component={Chats} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/dogs" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
