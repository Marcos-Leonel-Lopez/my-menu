import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'



const element = <FontAwesomeIcon icon={faUtensils} />



const CartWidget = () => {
  return (
    <div  className="Carrito">
   <div>
    {element}
    </div>
    <div>
        5
    </div>
</div> );
};

export default CartWidget;
