import React from "react";
import { Container, Col, Row } from "reactstrap";
import {Media} from 'reactstrap'
import "./styles/popularmovies.css";
import { Link, Route } from "react-router-dom";
import PopularMoviesPage from "./pages/PopularMoviesPage";
export default function PopularMovies(props) {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm="12" className="col-movies mt-5">
          <h2 className="h2-responsive text-white font-weight-bold">
            {props.title} <i className="fa fa-star" />
          </h2>
          <hr className="hr-light" />
          <div className="card-movies">
            {props.movies.slice(0, 18).map((data, key) => (
              <div key={key}>
                <Link
                  to={`/popular-movies/${data.original_title}`}
                  className="my-3"
                >
                  <Media
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                    middle
                  />
                </Link>
                <Route
                  path="/popular-movies"
                  render={() => <PopularMoviesPage fulldata={props.movies}/>}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
