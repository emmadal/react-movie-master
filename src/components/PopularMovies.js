import React, {useState, useEffect} from "react";
import {Container, Col, Row} from 'reactstrap'
import axios from 'axios'
export default function PopularMovies(props) {
  const [popdata, setPopData] = useState([])

  useEffect(() =>{

  })
  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="my-5">
            <h2 className="h2-responsive text-white">
              {props.title} <i className="fa fa-star" />
            </h2>
          <hr className="hr-light"/>
        </Col>
      </Row>
    </Container>
  );
}
