//styles
import "./tables-cart.css"

//react-icons
import { BsFillTrashFill } from "react-icons/bs";

//CONTEXT
import { ItemContex } from "../../context/ItemContext"
import { useContext } from "react"
import {itemTypes} from "../../context/actions/itemReducer"

const TablesCart = ({name, stock, price, numberSelect, id}) => {
    // eslint-disable-next-line no-unused-vars
    const [ listProducts, dispatch ] = useContext(ItemContex)

    return ( 
        <tr>
            <td>{name}</td>
            <td>X{numberSelect}</td>
            <td>{stock}</td>
            <td>{price * numberSelect}</td>
            <td onClick={() => dispatch({type: itemTypes.deleteCart, payload: id, stock: stock, numberSelect: numberSelect})}><h4><BsFillTrashFill /></h4></td>
        </tr>
     );
}
 
export default TablesCart;