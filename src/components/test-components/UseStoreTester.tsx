import React, { FC, useEffect } from "react";
import { useStore } from "../../store";

type Props = {
  login: boolean;
};

const UseStoreTester: FC<Props> = ({ login }) => {
  const { setUser, logout } = useStore();
  useEffect(() => {
    if (login) {
      setUser({
        id: "fadskjh",
        email: "test@test.com",
        username: "テストユーザー",
      });
    } else {
      logout();
    }
  }, [login]);
  return null;
};

export default UseStoreTester;
