import React from "react";
import { Container, Col, Row } from "reactstrap";
import { MDBBtn } from "mdbreact";
import "./styles/genres.css";

export default function Genres(props) {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm="12" className="col-genres">
          <h2 className="h2-responsive text-white">
            {props.title} <i className="fa fa-rss" />
          </h2>
          <hr className="hr-light" />
          <div className="card-genres">
            {props.genres.map((data, key) => (
              <MDBBtn
                key={key}
                gradient="aqua"
                className="font-weight-bold"
                size="lg"
                outline
              >
                {data.name}
              </MDBBtn>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
