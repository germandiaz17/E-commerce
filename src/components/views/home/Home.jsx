//COMPONENTS
import { useContext } from "react";
import { ItemContex } from "../../../context/ItemContext";
import CardItem from "../../cards/CardItem";

//styles
import "./home.css"

const Home = () => {

    const [listProducts] = useContext(ItemContex)
    return ( 
        <div>
            <h1 className="title-welcome">Welcome</h1>
            <h4>Here you will find a variety of clothes, what are you waiting for!</h4>
            <h2 className="title-products">Products: </h2>
            <div className="cards-cont">
                {
                 listProducts.map((item) => (
                        <CardItem key={item.id} 
                            title={item.name} 
                            stock={item.stock} 
                            type={item.type} 
                            image={item.image} 
                            id={item.id} 
                            description={item.description}
                            price={item.price}
                            numberSelect={item.numberSelect}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Home;