import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return(<ul className="Lista-productos">
            {
                productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                    //<li key={producto.id}> {producto.title} </li>
                ))
            }
        </ul>);
};

export default ItemList;
