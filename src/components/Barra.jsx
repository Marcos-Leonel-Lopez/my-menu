import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imagenes from '../assets/imagenes';
import CartWidget from './CartWidget/CartWidget';





const Barra = () => {
    return (
        ['lg'].map((expand) => (
            <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        {<img className="LogoPeque" src={imagenes[0].img} alt={imagenes[0].descripcion}/>}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-star flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Entradas</Nav.Link>
                                <Nav.Link href="#action2">Principales</Nav.Link>
                                <Nav.Link href="#action3">Guarniciones</Nav.Link>
                                <Nav.Link href="#action4">Postres</Nav.Link>
                                <NavDropdown title="Bebidas" bg="dark" variant="dark" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                    <NavDropdown.Item href="#action3">Sin Alcohol</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Con Alcohol</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Cafeteria</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className="CarritoForm">
                            <CartWidget/>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))
    );
};

export default Barra;
