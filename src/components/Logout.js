import React from "react";
import { auth, provider } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logoutWithGoogle = () => {
    signOut(auth, provider).then((result) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutWithGoogle}>ログアウト</button>
    </div>
  );
};
