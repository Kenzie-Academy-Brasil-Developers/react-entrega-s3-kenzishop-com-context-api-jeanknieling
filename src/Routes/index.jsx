import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;