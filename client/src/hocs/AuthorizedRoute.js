import { Route, Redirect } from "react-router-dom";
import { routesByName } from "modules/routes/routesByName";

const AuthorizedRoute = ({ user, children, ...rest }) => {
  return (
    <Route {...rest}>
      user ? children : <Redirect to={routesByName.signIn} />
    </Route>
  );
};

export default AuthorizedRoute;
