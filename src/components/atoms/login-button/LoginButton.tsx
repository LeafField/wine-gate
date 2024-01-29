import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      className="w-full rounded-xl border border-gray py-2 text-center transition-colors duration-300 hover:border-blue focus:outline-blue"
      href={"/login"}
    >
      ログイン/会員登録
    </Link>
  );
};

export default LoginButton;
