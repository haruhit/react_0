import React from "react";
import AuthButton from "./AuthButton";
import AuthDisplay from "./AuthDisplay";

const UserAuth = () => {
  return (
    <div>
      <h4>ユーザ認証</h4>
      <AuthButton />
      <AuthDisplay />
    </div>
  );
};

export default UserAuth;
