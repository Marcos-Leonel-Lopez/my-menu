import React from "react";

const Item = ({ producto }) => {
    return (
        <>
            <li >
            {producto.title}
            <br/>
            <img className="Imagenes-product" src={producto.picture} alt="" />
            </li>
            
        </>

    );
};

export default Item;
