import React from "react";
import { Container } from "mdbreact";

export default function PopularMoviesPage(props) {
  return (
    <>
      <Container>
         <p className="text-white">{props.fulldata.release_data}</p>
      </Container>
    </>
  );
}
