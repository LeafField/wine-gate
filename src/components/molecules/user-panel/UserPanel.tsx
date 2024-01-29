"use client";
import React from "react";
import { useStore } from "../../../store";
import UserPanelButton from "../../atoms/user-panel-button/UserPanelButton";
import LoginButton from "../../atoms/login-button/LoginButton";
import LogoutButton from "../../atoms/logout-button/LogoutButton";

const UserPanel = () => {
  const { user } = useStore();
  return (
    <div className="nav-panel">
      <div className="w-full">
        <h2 className="nav-title">会員メニュー</h2>
        {user && <p className="text-right">ようこそ{user.username}様</p>}
      </div>
      {user ? (
        <div className="flex h-full flex-wrap gap-5 panel-inner">
          <UserPanelButton href="/" title="ワイン記事を投稿する" />
          <UserPanelButton href="/" title="投稿記事一覧" />
          <UserPanelButton href="/" title="お気に入りのワイン" />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default UserPanel;
