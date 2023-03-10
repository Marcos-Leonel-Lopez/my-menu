
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../../components/ItemList/ItemList";


const platos = [
  {
    id: 1,
    title: "Empanadas" ,
    description: "Empanada de carne picada a cuchillo",
    price: 120,
    picture: "https://img.freepik.com/foto-gratis/tartas-recien-horneadas-bandeja-madera_181624-53000.jpg?w=740&t=st=1673240895~exp=1673241495~hmac=c54d7edb934914110d48b3843051a93ac574ebf910a3fef32b4ffc687988106d"
  },
  {
    id: 2,
    title: "Ravioles",
    description: "Ravioles de verdura",
    price: 1200,
    picture: "https://img.freepik.com/foto-gratis/primer-plano-sabrosos-ravioles-italianos_1220-5142.jpg?w=1380&t=st=1673240839~exp=1673241439~hmac=736cb10aec4d0a3f7565bb4fa8e25468d147b23c2e4c4c31341b37f3ebf22c6c" 
  },
  {
    id: 3,
    title: "Pizza",
    description: "Pizza con pepperoni picante",
    price: 1750,
    picture: "https://img.freepik.com/foto-gratis/deliciosa-pizza-napolitana-carne-pizzeria-deliciosa-comida_78826-2833.jpg?w=1380&t=st=1673242008~exp=1673242608~hmac=b9ddeadcdac939849c3542337429664e211f9527738a6695088408b9186d002d"
  },
  {
    id: 4,
    title: "Cazuela de Mariscos",
    description: "Casuela con calamar, langostinos y mejillones",
    price: 1700,
    picture: "https://img.freepik.com/foto-gratis/sabrosa-paella-espanola-marisco_1205-8949.jpg?w=1380&t=st=1673240847~exp=1673241447~hmac=77d52c991b44a18476e9b4f99d01753509cb0f16cf651a078a68d210353ffa28"
  },
  {
    id: 5,
    title: "Helado",
    description: "Crema Americana con salsa de chocolate",
    price: 250,
    picture: "https://img.freepik.com/foto-gratis/helado_144627-7393.jpg?w=1380&t=st=1673242232~exp=1673242832~hmac=56eb44aa8ecb77351d8b5a471fedf91b9972bc820f81a9037e7b0cde730f247d"
  }
];


const ItemListContainer = (props) => {

const [products, setProducts] = useState([]);

const getProducts = new Promise ((resolve) => {
  setTimeout(() => {
    resolve(platos);
  },2000);
});


useEffect(() => {
  getProducts.then((res) => {
    setProducts(res);
  })
  }, []);

  return (
    <Container fluid >
      <Row >
        <Col>
          {props.greeting}
          <ItemCount  />
          <ItemList productos={products} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
