import React, { FC, PropsWithChildren } from "react";
import Navigation from "../../components/organisms/navigation/Navigation";
import Container from "../../components/atoms/container/Container";
import Footer from "../../components/organisms/footer/Footer";

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Container>
        {children}
        <Navigation />
      </Container>
      <Footer />
    </>
  );
};

export default layout;
