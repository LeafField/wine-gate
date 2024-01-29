import React, { FC, PropsWithChildren } from "react";
import Navigation from "../../components/organisms/navigation/Navigation";
import Container from "../../components/atoms/container/Container";

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
      <Navigation />
    </Container>
  );
};

export default layout;
