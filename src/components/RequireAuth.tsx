import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthContext } from "~/store";
import { PropsWithChildren } from "~/types";

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/imagez/login' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
