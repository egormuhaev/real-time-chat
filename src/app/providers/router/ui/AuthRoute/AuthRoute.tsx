import { getUserAuthState } from "entities/User/model/selectors/getUserAuthState/getUserAuthState";
import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { QueryParams, routerConfig } from "shared/config";

export interface AuthRouteProps {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user } = useSelector(getUserAuthState);
  const [searchParams] = useSearchParams();

  if (user) {
    searchParams.set(QueryParams.ID, user.id);
    return <>{children}</>;
  } else {
    return <Navigate to={routerConfig.publicRoute.login.path} />;
  }
};
