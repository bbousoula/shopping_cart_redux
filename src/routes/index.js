import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
