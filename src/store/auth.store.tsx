import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { createContext, FC, useContext, useState } from "react";

import type { PropsWithChildren, StatusType } from "~/types";

interface AuthStore {
  loginStatus: StatusType;
  isLoggedIn: boolean;
  user: User | undefined;
  login: () => void;
  logout: () => void;
  resetLoginStatus: () => void;
}

const AuthContext = createContext({} as AuthStore);

export const AuthProvider: FC<PropsWithChildren> = ({ ...props }) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();
  const [loginStatus, setLoginStatus] = useState<StatusType>("IDLE");

  const login = () => {
    setLoginStatus("LOADING");
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoginStatus("SUCCESS");
        setLoggedIn(true);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
        setLoginStatus("ERROR");
        setLoggedIn(false);
        setUser(undefined);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setLoginStatus("IDLE");
        setLoggedIn(false);
        setUser(undefined);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const resetLoginStatus = () => {
    setLoginStatus("IDLE");
  };

  return (
    <AuthContext.Provider
      value={{
        loginStatus,
        isLoggedIn,
        user,
        login,
        logout,
        resetLoginStatus,
      }}
      {...props}
    />
  );
};

export const useAuthContext = () => useContext(AuthContext);
