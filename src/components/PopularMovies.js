import React from "react";
import { Container, Col, Row } from "reactstrap";
import { MDBCard, MDBCardImage } from "mdbreact";
import "./styles/popularmovies.css";
export default function PopularMovies(props) {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm="12" className="col-movies">
          <h2 className="h2-responsive text-white">
            {props.title} <i className="fa fa-star" />
          </h2>
          <hr className="hr-light" />
          <div className="card-movies">
            {props.movies.map((data, key) => (
              <MDBCard key={key} className="my-3">
                <MDBCardImage
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                  waves
                />
              </MDBCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
