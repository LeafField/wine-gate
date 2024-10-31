import React from "react";
import { KumarOne } from "../../../utils/font";
import { Symbol } from "../../atoms/Symbol/Symbol";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex h-[clamp(3.44rem,9.24vw,6rem)] flex-col items-center justify-center bg-red text-white">
      <p className="text-center text-header-subtitle">
        気軽にワイン入門、気楽にワイン紹介
      </p>
      <h1 className={`${KumarOne.className} text-center text-header-title`}>
        <Link prefetch={false} href={"/"}>
          WINE GATE
        </Link>
      </h1>
      <Symbol />
    </header>
  );
};

export default Header;
