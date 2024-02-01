"use client";
import { FC } from "react";
import { useStore } from "../../../store";
import { supabase } from "../../../utils/supabase";

const AuthListener: FC = () => {
  const { setUser, logout, setModal, setMenu } = useStore();

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      setUser({
        id: session.user.id,
        email: session.user.email,
        username: session.user.user_metadata.username,
      });
    } else if (event === "SIGNED_OUT") {
      logout();
      setModal(["ログアウトしました"]);
      setMenu("close");
    }
  });

  return null;
};

export default AuthListener;
