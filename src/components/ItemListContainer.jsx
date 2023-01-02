import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = (props) => {
  return (
    <Container fluid >
                <Row >
                    <Col>
                        {props.greeting}
                    </Col>
                </Row>       
    </Container>
  );
};

export default ItemListContainer;
