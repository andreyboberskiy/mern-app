import Header from "./modules/Header/Header";
import { Route, Switch } from "react-router-dom";
import SignUp from "modules/SignUp/SignUp";
import SignIn from "modules/SignIn/SignIn";
import { routesByName } from "modules/routes/routesByName";
import AuthorizedRoute from "hocs/AuthorizedRoute";
import HomePage from "modules/HomePage/HomePage";

const App = () => {
  return (
    <Switch>
      <AuthorizedRoute exact path={routesByName.home}>
        <HomePage />
      </AuthorizedRoute>
      <Route exact path={routesByName.signUp}>
        <SignUp />
      </Route>
      <Route exact path={routesByName.signIn}>
        <SignIn />
      </Route>
        <div>kek</div>
    </Switch>
  );
};

export default App;
