
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';


const mas = <FontAwesomeIcon icon={faPlus} />
const menos = <FontAwesomeIcon icon={faMinus} />



const ItemCount = () => {


    const [count, setCount] = useState(0);

    const stock = 5;

    const suma = () => {

       
        if (stock === count) {
            return;
         }
         setCount(count + 1);
    };
    const resta = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    };

    return (
        <Card bg="secondary" key="secondary" text="secondary" style={{ width: '18 rem' }}>
            <Card.Body>
                <div className="Contador-set">
                    <Button className="Butt-Cont" variant="outline-light" onClick={resta}>{menos}</Button>
                    <Card.Text className="Num-ind" >{count}</Card.Text>
                    <Button className="Butt-Cont" variant="outline-light" onClick={suma}>{mas}</Button>
                </div>
                <div className="Contador-add">
                    <Button variant="outline-light">Agregar pedido</Button>
                </div>

            </Card.Body>
        </Card>




    );
};

export default ItemCount;
