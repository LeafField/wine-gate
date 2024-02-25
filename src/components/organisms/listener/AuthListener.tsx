"use client";
import { FC, useEffect } from "react";
import { useStore } from "../../../store";
import { supabase } from "../../../utils/supabase";
import { QueryCache, useQueryClient } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";

const AuthListener: FC = () => {
  const { user, setUser, logout, setModal, setMenu } = useStore();
  const router = useRouter();
  const pathname = usePathname();
  const queryCache = new QueryCache();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user && pathname !== "/favorite" && pathname !== "/mypost") {
      queryClient.removeQueries({
        queryKey: ["myFavoriteWine"],
        exact: true,
      });
      queryClient.removeQueries({
        queryKey: ["myPostWine"],
        exact: true,
      });
    }
  }, [user, pathname]);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      setUser({
        id: session.user.id,
        email: session.user.email,
        username: session.user.user_metadata.username,
      });
    } else if (event === "SIGNED_OUT") {
      logout();
      if (pathname === "/favorite" || pathname === "/mypost") {
        router.replace("/");
      }
      setModal(["ログアウトしました"]);
      setMenu("close");
    }
  });

  return null;
};

export default AuthListener;
