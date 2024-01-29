import React from "react";
import { supabase } from "../../../utils/supabase";

const LogoutButton = () => {
  const clickHandler = () => {
    supabase.auth.signOut();
  };

  return (
    <div
      onClick={clickHandler}
      className="user-panel-button cursor-pointer hover:border-blue focus:outline-blue"
    >
      <span className="w-24 select-none text-center">ログアウト</span>
    </div>
  );
};

export default LogoutButton;
