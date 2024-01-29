import React from "react";
import Link from "next/link";
import { useStore } from "../../../store";

const UserPanel = () => {
  const { user } = useStore();
  return <div className="nav-panel"></div>;
};

export default UserPanel;
