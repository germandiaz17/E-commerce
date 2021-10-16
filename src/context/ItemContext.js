import {createContext, useReducer} from "react"
import articles from "../array/items"
import itemReducer from "./actions/itemReducer"

const initialState = articles

const ItemContex = createContext()


const ItemProvider = ({children}) => {

    // const [listProducts, setListProducts] = useState(articles)

    const [listProducts, dispatch] = useReducer(itemReducer, initialState)

    return(
        <ItemContex.Provider value={[listProducts, dispatch]}>
            {children}
        </ItemContex.Provider>
    )
}

export {ItemContex}
export default ItemProvider