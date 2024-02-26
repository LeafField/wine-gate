"use client";
import React from "react";
import { useStore } from "../../../store";
import UserPanelButton from "../../atoms/user-panel-button/UserPanelButton";
import LoginButton from "../../atoms/login-button/LoginButton";
import LogoutButton from "../../atoms/logout-button/LogoutButton";

const UserPanel = () => {
  const { user, menu } = useStore();
  return (
    <div
      className={`nav-panel max-tablet:animate-fadeIn ${menu === "member" ? "max-tablet:flex" : "max-tablet:hidden"}`}
      id="user-panel"
    >
      <div className="w-full">
        <h2 className="nav-title">会員メニュー</h2>
        {user && <p className="text-right">ようこそ{user.username}様</p>}
      </div>
      {user ? (
        <div className="flex h-full flex-wrap gap-5 panel-inner">
          <UserPanelButton href="/editing" title="ワイン記事を投稿する" />
          <UserPanelButton href="/mypost" title="投稿記事一覧" />
          <UserPanelButton href="/favorite" title="お気に入りのワイン" />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default UserPanel;
