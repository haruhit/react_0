import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const AuthButton = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return <>{auth ? <button>ログアウト</button> : <button>ログイン</button>}</>;
};

export default AuthButton;
