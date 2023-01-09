import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import ItemNumer from "../ItemNumer/ItemNumer";

const element = <FontAwesomeIcon icon={faUtensils} />

const CartWidget = () => {
    return (
        <div className="Carrito">
            <div>{element}</div>
            <ItemNumer greeting={5} />
        </div>);
};

export default CartWidget;
