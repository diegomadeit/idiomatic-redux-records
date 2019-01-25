import React from "react";
import Header from "../components/header/Header";

export const withLayout = Wrapped => props => {
  return (
    <>
      <Header />
      <section className="content">
        <Wrapped {...props} />
      </section>
    </>
  );
};

export default withLayout;
