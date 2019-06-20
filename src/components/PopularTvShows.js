import React from "react";
import { Container, Col, Row } from "reactstrap";

export default function PopularTvShows(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="my-5">
          <h2 className="h2-responsive text-white">
            {props.title} <i className="fa fa-tv" />
          </h2>
          <hr className="hr-light" />
        </Col>
      </Row>
    </Container>
  );
}
