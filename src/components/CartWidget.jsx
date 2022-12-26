import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import ItemListContainer from "./ItemListContainer";

const element = <FontAwesomeIcon icon={faUtensils} />

const CartWidget = () => {
    return (
        <div className="Carrito">
            <div>{element}</div>
            <ItemListContainer greeting={10} />
        </div>);
};

export default CartWidget;
