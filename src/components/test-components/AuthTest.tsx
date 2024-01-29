"use client";
import React, { useEffect } from "react";
import { supabase } from "../../utils/supabase";

const AuthTest = () => {
  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      console.log(session.data.session?.user.user_metadata);
    };
    getSession();
  }, []);

  const clickHandler = async () => {
    await supabase.auth.signOut();
  };

  return <button onClick={clickHandler}>ログアウト</button>;
};

export default AuthTest;
