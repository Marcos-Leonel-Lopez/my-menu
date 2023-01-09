import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemListContainer from "./ItemListContainer/ItemListContainer";


const Cuerpo = () => {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={true} md={6} lg={4} className="Lista-items">
                    <ItemListContainer greeting="Hola, esto es el contenedor del listado de productos"/>
                    </Col>
                </Row>       
            </Container>
        </>);
};

export default Cuerpo;
